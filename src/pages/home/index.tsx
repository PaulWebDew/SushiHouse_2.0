import SliderAdvertisment from "../../components/slider_advertisment";
import { useGetGoodsQueryQuery } from "../../store/api/goods.api.tsx";

export default function Home() {
  const { data, isLoading } = useGetGoodsQueryQuery({});
  console.log(data);
  return (
    <div>
      <SliderAdvertisment />
    </div>
  );
}
