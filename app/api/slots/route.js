import { getPublicSlotStatuses } from '@/lib/slotsStore';

// Public: slot number + status only. Never returns names or CNICs -- see
// the lookup route for the privacy-preserving ways to reveal an occupant.
export async function GET() {
  return Response.json({ slots: getPublicSlotStatuses() });
}
