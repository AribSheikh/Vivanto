#!/usr/bin/env python3
"""
Generates the bespoke line-art / silhouette illustrations used across the
Vivanto site, in place of hotlinked photography. Pure vector, no external
assets — everything is built from paths, so it stays crisp at any size and
matches the site's ink / gold / cream palette exactly.
"""
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "assets", "img", "illustrations")
os.makedirs(OUT, exist_ok=True)

W, H = 1600, 1200

INK        = "#17140f"
INK2       = "#211c15"
INK3       = "#2b241a"
GOLD_DEEP  = "#5c4c31"
GOLD       = "#85724f"
GOLD_MID   = "#96835b"
GOLD_LIGHT = "#ab9871"
GOLD_PALE  = "#d8cbac"
CREAM      = "#f4ecda"

def svg_open(defs=""):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" preserveAspectRatio="xMidYMid slice">
<defs>
{defs}
</defs>
'''

SVG_CLOSE = "</svg>"

def sky_defs(glow_cx=0.5, glow_cy=0.42, warm=True):
    top = INK if warm else "#151a17"
    mid = "#3a2e1d" if warm else "#1c2622"
    glow = "#c9a466" if warm else "#7fa892"
    return f'''
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="{top}"/>
    <stop offset="55%" stop-color="{mid}"/>
    <stop offset="100%" stop-color="{INK3}"/>
  </linearGradient>
  <radialGradient id="glow" cx="{glow_cx}" cy="{glow_cy}" r="0.55">
    <stop offset="0%" stop-color="{glow}" stop-opacity="0.55"/>
    <stop offset="45%" stop-color="{glow}" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="{glow}" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="vign" cx="0.5" cy="0.5" r="0.75">
    <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
    <stop offset="100%" stop-color="#000000" stop-opacity="0.38"/>
  </radialGradient>
'''

def base_bg(sun=True, sun_pos=(0.5, 0.4), r=46):
    s = f'<circle cx="{sun_pos[0]*W:.0f}" cy="{sun_pos[1]*H:.0f}" r="{r}" fill="{CREAM}" opacity="0.85"/>' if sun else ""
    return f'''
  <rect width="{W}" height="{H}" fill="url(#sky)"/>
  <rect width="{W}" height="{H}" fill="url(#glow)"/>
  {s}
'''

def vignette_grain():
    return f'''
  <rect width="{W}" height="{H}" fill="url(#vign)"/>
'''

def hill(points, color, opacity=1):
    # points: list of (x,y) fractions across width, baseline at H
    d = f"M 0 {H} L 0 {points[0][1]*H:.1f} "
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i+1]
        cx = (x1 + x2) / 2 * W
        d += f"Q {cx:.1f} {min(y1,y2)*H - 20:.1f} {x2*W:.1f} {y2*H:.1f} "
    d += f"L {W} {H} Z"
    return f'<path d="{d}" fill="{color}" opacity="{opacity}"/>'

def cypress(x, y, scale=1.0, color=GOLD_DEEP, opacity=0.92):
    """A tapering cypress silhouette, trunk at (x,y) baseline."""
    w = 16 * scale
    h = 150 * scale
    segs = []
    n = 7
    for i in range(n):
        t0 = i / n
        t1 = (i + 1) / n
        y0 = y - h * t0
        y1 = y - h * t1
        wfac0 = (1 - t0) ** 0.7
        wfac1 = (1 - t1) ** 0.7
        w0 = w * wfac0
        w1 = w * wfac1
        wobble = (2 if i % 2 == 0 else -2) * scale
        segs.append(f"M {x-w0:.1f} {y0:.1f} C {x-w0-wobble:.1f} {(y0+y1)/2:.1f}, {x-w1:.1f} {(y0+y1)/2:.1f}, {x-w1:.1f} {y1:.1f} "
                    f"L {x+w1:.1f} {y1:.1f} C {x+w1:.1f} {(y0+y1)/2:.1f}, {x+w0+wobble:.1f} {(y0+y1)/2:.1f}, {x+w0:.1f} {y0:.1f} Z")
    body = "".join(f'<path d="{s}" fill="{color}" opacity="{opacity}"/>' for s in segs)
    trunk = f'<line x1="{x}" y1="{y}" x2="{x}" y2="{y+10*scale}" stroke="{color}" stroke-width="{2.5*scale}" opacity="{opacity}"/>'
    return body + trunk

def cypress_row(cx0, cx1, y, n, scale_range=(0.55, 1.15), color=GOLD_DEEP):
    out = []
    for i in range(n):
        t = i / max(n - 1, 1)
        x = cx0 + (cx1 - cx0) * t
        scale = scale_range[0] + (scale_range[1] - scale_range[0]) * (0.5 + 0.5 * (t if t < .5 else 1 - t)) * 1.6
        scale = max(scale_range[0], min(scale_range[1], scale))
        out.append(cypress(x, y, scale=scale, color=color, opacity=0.85 + 0.1*t))
    return "".join(out)

def road(pts, color, width0=90, width1=6):
    # pts: list of (x_frac, y_frac) from bottom (wide) to horizon (narrow)
    n = len(pts)
    left = []
    right = []
    for i, (xf, yf) in enumerate(pts):
        t = i / (n - 1)
        w = width0 + (width1 - width0) * t
        left.append((xf*W - w/2, yf*H))
        right.append((xf*W + w/2, yf*H))
    d = f"M {left[0][0]:.1f} {left[0][1]:.1f} "
    for p in left[1:]:
        d += f"L {p[0]:.1f} {p[1]:.1f} "
    for p in reversed(right):
        d += f"L {p[0]:.1f} {p[1]:.1f} "
    d += "Z"
    return f'<path d="{d}" fill="{color}" opacity="0.5"/>'

def vine_rows(x0, x1, y0, y1, n_rows, color=GOLD_PALE, opacity=0.5):
    out = []
    for i in range(n_rows):
        t = i / (n_rows - 1)
        y = y0 + (y1 - y0) * t
        sway = 14 * (1 - t)
        d = f"M {x0} {y:.1f} Q {(x0+x1)/2:.1f} {y - sway:.1f} {x1} {y:.1f}"
        sw = 2.6 * (1 - t*0.6)
        out.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{sw:.2f}" opacity="{opacity*(1-t*0.35):.2f}"/>')
    return "".join(out)

def frame():
    m = 26
    return f'<rect x="{m}" y="{m}" width="{W-2*m}" height="{H-2*m}" fill="none" stroke="{GOLD_PALE}" stroke-opacity="0.22" stroke-width="1.5"/>'

def grape_leaf(cx, cy, size=1.0, rotation=-18, color="#3f3420", stroke=GOLD_LIGHT):
    import math
    lobes = 5
    pts = []
    for i in range(lobes * 2):
        ang = -90 + rotation + i * (360 / (lobes * 2))
        rad = math.radians(ang)
        r = size * (150 if i % 2 == 0 else 92)
        pts.append((cx + r * math.cos(rad), cy + r * math.sin(rad) * 0.85))
    d = f"M {pts[0][0]:.1f} {pts[0][1]:.1f} "
    for i in range(1, len(pts) + 1):
        p0 = pts[(i - 1) % len(pts)]
        p1 = pts[i % len(pts)]
        mx, my = (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2
        d += f"Q {p0[0]:.1f} {p0[1]:.1f} {mx:.1f} {my:.1f} "
    d += "Z"
    stem_ang = math.radians(-90 + rotation + 180)
    sx, sy = cx + 150*size*math.cos(stem_ang)*0.15, cy + 150*size*math.sin(stem_ang)*0.15
    stem = f'<line x1="{cx:.1f}" y1="{cy:.1f}" x2="{sx:.1f}" y2="{sy+40*size:.1f}" stroke="{stroke}" stroke-width="{2.2*size:.2f}" opacity="0.7"/>'
    veins = "".join(
        f'<line x1="{cx:.1f}" y1="{cy:.1f}" x2="{pts[i][0]:.1f}" y2="{pts[i][1]:.1f}" stroke="{stroke}" stroke-width="1" opacity="0.35"/>'
        for i in range(0, len(pts), 2)
    )
    return f'<path d="{d}" fill="{color}" stroke="{stroke}" stroke-width="2" opacity="0.88"/>' + veins + stem

def monogram(letter="V", x=None, y=None, size=560, opacity=0.05):
    x = x if x is not None else W*0.82
    y = y if y is not None else H*1.02
    return f'<text x="{x}" y="{y}" font-family="Georgia, \'Times New Roman\', serif" font-style="italic" font-size="{size}" fill="{GOLD_PALE}" opacity="{opacity}" text-anchor="middle">{letter}</text>'


# ---------------------------------------------------------------- CYPRESS / HERO
def illus_cypress():
    defs = sky_defs(glow_cx=0.5, glow_cy=0.38)
    body = base_bg(sun=True, sun_pos=(0.5, 0.36), r=50)
    body += hill([(0,.62),(.25,.58),(.5,.60),(.75,.565),(1,.60)], "#332a1c", 1)
    body += hill([(0,.70),(.3,.655),(.55,.685),(.8,.65),(1,.69)], "#241d13", 1)
    body += road([(0.5,1.0),(0.5,0.86),(0.502,0.74),(0.503,0.70)], INK2)
    # cypress rows flanking the road, receding
    xs_left  = [0.30,0.34,0.375,0.405,0.428,0.448,0.463,0.476]
    xs_right = [0.70,0.66,0.625,0.595,0.572,0.552,0.537,0.524]
    ys       = [0.985,0.93,0.885,0.85,0.82,0.795,0.775,0.758]
    scales   = [1.5,1.28,1.1,0.95,0.82,0.7,0.6,0.52]
    for x,y,s in zip(xs_left, ys, scales):
        body += cypress(x*W, y*H, scale=s, color="#1b170f", opacity=0.95)
    for x,y,s in zip(xs_right, ys, scales):
        body += cypress(x*W, y*H, scale=s, color="#1b170f", opacity=0.95)
    body += hill([(0,.99),(1,.99)], INK, 1)
    body += frame()
    body += monogram()
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE


# ---------------------------------------------------------------- VILLA
def illus_villa():
    defs = sky_defs(glow_cx=0.55, glow_cy=0.3)
    body = base_bg(sun=True, sun_pos=(0.78,0.22), r=40)
    body += hill([(0,.66),(.5,.62),(1,.65)], "#332a1c")
    body += hill([(0,.74),(.5,.71),(1,.735)], "#241d13")
    # villa building block
    bx, by, bw, bh = 0.30*W, 0.46*H, 0.42*W, 0.28*H
    body += f'<rect x="{bx:.0f}" y="{by:.0f}" width="{bw:.0f}" height="{bh:.0f}" fill="{INK2}" stroke="{GOLD_PALE}" stroke-opacity="0.35" stroke-width="2"/>'
    # roof
    body += f'<path d="M {bx-18:.0f} {by:.0f} L {bx+bw/2:.0f} {by-70:.0f} L {bx+bw+18:.0f} {by:.0f} Z" fill="{INK3}" stroke="{GOLD_PALE}" stroke-opacity="0.3" stroke-width="2"/>'
    # arched windows
    for i in range(4):
        wx = bx + bw*0.12 + i*bw*0.235
        wy = by + bh*0.30
        ww, wh = bw*0.10, bh*0.42
        body += f'<path d="M {wx:.0f} {wy+wh:.0f} L {wx:.0f} {wy+ww/2:.0f} A {ww/2:.0f} {ww/2:.0f} 0 0 1 {wx+ww:.0f} {wy+ww/2:.0f} L {wx+ww:.0f} {wy+wh:.0f} Z" fill="{GOLD_PALE}" opacity="0.16" stroke="{GOLD_PALE}" stroke-opacity="0.45" stroke-width="1.5"/>'
    # door
    dx, dw = bx+bw*0.5-bw*0.06, bw*0.12
    body += f'<path d="M {dx:.0f} {by+bh:.0f} L {dx:.0f} {by+bh*0.55:.0f} A {dw/2:.0f} {dw/2:.0f} 0 0 1 {dx+dw:.0f} {by+bh*0.55:.0f} L {dx+dw:.0f} {by+bh:.0f} Z" fill="{INK}" stroke="{GOLD_PALE}" stroke-opacity="0.4" stroke-width="1.5"/>'
    body += cypress(bx-60, by+bh, scale=1.5, color="#1c170f")
    body += cypress(bx+bw+60, by+bh, scale=1.7, color="#1c170f")
    body += cypress(bx+bw+120, by+bh, scale=1.1, color="#221c12")
    body += hill([(0,.985),(1,.985)], INK, 1)
    body += frame()
    body += monogram()
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE


# ---------------------------------------------------------------- VINEYARD (rows, close)
def illus_vineyard_rows():
    defs = sky_defs(glow_cx=0.5, glow_cy=0.28)
    body = base_bg(sun=True, sun_pos=(0.5,0.24), r=42)
    body += hill([(0,.40),(.5,.36),(1,.40)], "#3a2e1d")
    body += hill([(0,.50),(.5,.46),(1,.505)], "#2c2415")
    body += hill([(0,.60),(.5,.565),(1,.615)], "#221c12")
    body += vine_rows(0.06*W, 0.94*W, 0.62*H, 0.98*H, 13, color=GOLD_LIGHT, opacity=0.55)
    for i in range(9):
        t = i/8
        body += cypress(0.08*W + t*0.84*W, 0.615*H - 10, scale=0.34+0.05*(i%2), color="#241d13", opacity=0.8)
    body += hill([(0,.995),(1,.995)], INK, 1)
    body += frame()
    body += monogram()
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE


# ---------------------------------------------------------------- VINEYARD (wide hills)
def illus_vineyard_hills():
    defs = sky_defs(glow_cx=0.36, glow_cy=0.30)
    body = base_bg(sun=True, sun_pos=(0.32,0.26), r=44)
    body += hill([(0,.46),(.3,.40),(.6,.44),(1,.38)], "#382c1c")
    body += hill([(0,.58),(.35,.52),(.65,.565),(1,.52)], "#291f14")
    body += vine_rows(0.0, W, 0.60*H, 0.99*H, 16, color=GOLD_PALE, opacity=0.5)
    body += cypress(0.14*W, 0.60*H, scale=1.3, color="#1d170f")
    body += cypress(0.86*W, 0.565*H, scale=1.1, color="#221b11")
    body += hill([(0,.995),(1,.995)], INK, 1)
    body += frame()
    body += monogram()
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE


# ---------------------------------------------------------------- INFINITY POOL
def illus_pool():
    defs = sky_defs(glow_cx=0.5, glow_cy=0.3, warm=True)
    body = base_bg(sun=True, sun_pos=(0.5,0.27), r=40)
    body += hill([(0,.42),(.5,.385),(1,.42)], "#3a2e1d")
    body += hill([(0,.50),(.5,.47),(1,.505)], "#2a2214")
    # pool body
    py = 0.56*H
    body += f'<rect x="0" y="{py:.0f}" width="{W}" height="{H-py:.0f}" fill="#1a2321"/>'
    body += f'<rect x="0" y="{py:.0f}" width="{W}" height="{H-py:.0f}" fill="url(#glow)" opacity="0.5"/>'
    # ripple lines + sun reflection
    for i in range(10):
        yy = py + 18 + i*((H-py-18)/10)
        wobble = 30 - i*2
        body += f'<path d="M {-20} {yy:.0f} Q {W*0.5:.0f} {yy-wobble:.0f} {W+20} {yy:.0f}" fill="none" stroke="{GOLD_PALE}" stroke-width="{1.4 if i%2 else 0.8}" opacity="{0.28 - i*0.015:.2f}"/>'
    # reflection streak
    body += f'<path d="M {W*0.46:.0f} {py:.0f} L {W*0.42:.0f} {H:.0f} L {W*0.58:.0f} {H:.0f} L {W*0.54:.0f} {py:.0f} Z" fill="{CREAM}" opacity="0.10"/>'
    # infinity edge line
    body += f'<line x1="0" y1="{py:.0f}" x2="{W}" y2="{py:.0f}" stroke="{GOLD_PALE}" stroke-width="2" opacity="0.5"/>'
    # loungers
    for lx in (0.12, 0.24):
        bx = lx*W
        by = py - 34
        body += f'<rect x="{bx:.0f}" y="{by:.0f}" width="120" height="16" rx="4" fill="{INK2}" stroke="{GOLD_PALE}" stroke-opacity="0.4"/>'
        body += f'<rect x="{bx:.0f}" y="{by-30:.0f}" width="34" height="30" rx="4" fill="{INK2}" stroke="{GOLD_PALE}" stroke-opacity="0.4"/>'
    body += cypress(0.92*W, py, scale=1.2, color="#1d170f")
    body += frame()
    body += monogram()
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE


# ---------------------------------------------------------------- WINE BARRELS / CELLAR
def illus_winebarrels():
    defs = sky_defs(glow_cx=0.5, glow_cy=0.32, warm=True)
    body = f'<rect width="{W}" height="{H}" fill="{INK2}"/>'
    body += f'<rect width="{W}" height="{H}" fill="url(#glow)"/>'
    # stone arch
    body += f'<path d="M 60 {H} L 60 {0.42*H:.0f} A {0.5*W-60:.0f} {0.34*H:.0f} 0 0 1 {W-60} {0.42*H:.0f} L {W-60} {H}" fill="none" stroke="{GOLD_PALE}" stroke-opacity="0.28" stroke-width="10"/>'
    # barrels: two rows
    def barrel(cx, cy, r, h):
        segs = f'<ellipse cx="{cx}" cy="{cy-h/2}" rx="{r}" ry="{r*0.42}" fill="{GOLD_DEEP}" opacity="0.9"/>'
        segs += f'<rect x="{cx-r}" y="{cy-h/2}" width="{2*r}" height="{h}" fill="{GOLD_DEEP}" opacity="0.9"/>'
        segs += f'<ellipse cx="{cx}" cy="{cy+h/2}" rx="{r}" ry="{r*0.42}" fill="#4a3c26"/>'
        for k in (-1,1):
            segs += f'<line x1="{cx+k*r*0.55}" y1="{cy-h/2-r*0.42}" x2="{cx+k*r*0.55}" y2="{cy+h/2+r*0.30}" stroke="#3c3018" stroke-width="3" opacity="0.7"/>'
        segs += f'<ellipse cx="{cx}" cy="{cy-h/2}" rx="{r}" ry="{r*0.42}" fill="none" stroke="{GOLD_PALE}" stroke-opacity="0.4" stroke-width="1.5"/>'
        return segs
    r, h = 95, 150
    y_back = 0.62*H
    for i, x in enumerate([0.22,0.37,0.52,0.67,0.82]):
        body += barrel(x*W, y_back, r*0.82, h*0.82)
    y_front = 0.83*H
    for i, x in enumerate([0.15,0.32,0.5,0.68,0.85]):
        body += barrel(x*W, y_front, r, h)
    # hanging candle glow dots
    for x in (0.2,0.5,0.8):
        body += f'<circle cx="{x*W:.0f}" cy="{0.30*H:.0f}" r="5" fill="{GOLD_PALE}"/>'
        body += f'<circle cx="{x*W:.0f}" cy="{0.30*H:.0f}" r="26" fill="{GOLD_PALE}" opacity="0.18"/>'
    body += frame()
    body += monogram()
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE


# ---------------------------------------------------------------- HARVEST / GRAPES
def illus_harvest():
    defs = sky_defs(glow_cx=0.5, glow_cy=0.3)
    body = base_bg(sun=True, sun_pos=(0.68,0.24), r=40)
    body += hill([(0,.48),(.5,.44),(1,.47)], "#382c1c")
    body += hill([(0,.60),(.5,.565),(1,.60)], "#251e13")
    body += vine_rows(0.0, W, 0.62*H, 0.99*H, 10, color=GOLD_PALE, opacity=0.4)
    # large grape cluster foreground, bottom-left
    cx, cy = 0.32*W, 0.78*H
    # leaf sits behind/above the cluster first so grapes overlap it
    body += grape_leaf(cx + 60, cy - 210, size=1.15, rotation=-20)
    circles = []
    rows = [(-2,-1,0,1,2),(-1.5,-0.5,0.5,1.5),(-1,0,1),(-0.5,0.5),(0,)]
    for ri, row in enumerate(rows):
        for gx in row:
            x = cx + gx*46
            y = cy + ri*44
            circles.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="27" fill="{GOLD_DEEP}" opacity="0.92"/>')
            circles.append(f'<circle cx="{x-8:.0f}" cy="{y-9:.0f}" r="8" fill="{GOLD_PALE}" opacity="0.35"/>')
    body += "".join(circles)
    body += cypress(0.86*W, 0.62*H, scale=1.0, color="#1d170f")
    body += hill([(0,.995),(1,.995)], INK, 1)
    body += frame()
    body += monogram()
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE


# ---------------------------------------------------------------- HILL TOWNS
def town(name, sun_pos, buildings, tower_x_frac):
    defs = sky_defs(glow_cx=sun_pos[0], glow_cy=sun_pos[1])
    body = base_bg(sun=True, sun_pos=sun_pos, r=40)
    body += hill([(0,.60),(.5,.52),(1,.60)], "#3a2e1d")
    body += hill([(0,.72),(.5,.64),(1,.72)], "#241d13")
    base_y = 0.66*H
    for (xf, wf, hf) in buildings:
        bw, bh = wf*W, hf*H
        bx = xf*W - bw/2
        by = base_y - bh
        body += f'<rect x="{bx:.0f}" y="{by:.0f}" width="{bw:.0f}" height="{bh:.0f}" fill="{INK2}" stroke="{GOLD_PALE}" stroke-opacity="0.3" stroke-width="1.5"/>'
        for wy in range(1,3):
            for wx in range(1, int(bw//26)):
                if (wx+wy) % 2 == 0: continue
                body += f'<rect x="{bx+wx*26:.0f}" y="{by+bh-wy*30:.0f}" width="7" height="10" fill="{GOLD_PALE}" opacity="0.28"/>'
    # campanile tower
    tx = tower_x_frac*W
    tw, th = 0.028*W, 0.30*H
    ty = base_y - th
    body += f'<rect x="{tx-tw/2:.0f}" y="{ty:.0f}" width="{tw:.0f}" height="{th:.0f}" fill="{INK3}" stroke="{GOLD_PALE}" stroke-opacity="0.4" stroke-width="1.5"/>'
    body += f'<path d="M {tx-tw/2-6:.0f} {ty:.0f} L {tx:.0f} {ty-46:.0f} L {tx+tw/2+6:.0f} {ty:.0f} Z" fill="{INK3}" stroke="{GOLD_PALE}" stroke-opacity="0.4" stroke-width="1.5"/>'
    body += f'<circle cx="{tx:.0f}" cy="{ty+th*0.3:.0f}" r="7" fill="none" stroke="{GOLD_PALE}" stroke-opacity="0.5" stroke-width="1.5"/>'
    body += cypress(0.1*W, base_y, scale=1.2, color="#1d170f")
    body += cypress(0.92*W, base_y, scale=1.0, color="#221b11")
    body += hill([(0,.995),(1,.995)], INK, 1)
    body += frame()
    body += monogram(letter=name[0])
    body += vignette_grain()
    return svg_open(defs) + body + SVG_CLOSE

def illus_pienza():
    buildings = [(0.30,0.16,0.16),(0.45,0.20,0.24),(0.60,0.15,0.14),(0.72,0.17,0.19)]
    return town("Pienza", (0.5,0.32), buildings, 0.45)

def illus_siena():
    buildings = [(0.28,0.17,0.15),(0.42,0.19,0.22),(0.58,0.16,0.17),(0.74,0.20,0.24)]
    return town("Siena", (0.62,0.30), buildings, 0.58)

def illus_montalcino():
    buildings = [(0.25,0.15,0.20),(0.40,0.18,0.28),(0.55,0.16,0.18),(0.70,0.19,0.22),(0.82,0.13,0.15)]
    return town("Montalcino", (0.4,0.28), buildings, 0.40)


ILLUSTRATIONS = {
    "cypress":        illus_cypress,
    "villa":          illus_villa,
    "vineyard-rows":  illus_vineyard_rows,
    "vineyard-hills": illus_vineyard_hills,
    "pool":           illus_pool,
    "winebarrels":    illus_winebarrels,
    "harvest":        illus_harvest,
    "pienza":         illus_pienza,
    "siena":          illus_siena,
    "montalcino":     illus_montalcino,
}

if __name__ == "__main__":
    for name, fn in ILLUSTRATIONS.items():
        svg = fn()
        path = os.path.join(OUT, f"{name}.svg")
        with open(path, "w") as f:
            f.write(svg)
        print("wrote", path, len(svg), "bytes")
