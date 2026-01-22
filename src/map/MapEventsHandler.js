import { useMapEvents } from 'react-leaflet';
import { fetchRestaurantsInBounds } from '../utils/data';
import "leaflet/dist/leaflet.css";

export default function MapEventsHandler({ setRestaurants }) {
  useMapEvents({
    async moveend(e) {
      const map = e.target;
      const bounds = map.getBounds();

      const data = await fetchRestaurantsInBounds(bounds);
      setRestaurants(data);
    },
  });

  return null;
}
