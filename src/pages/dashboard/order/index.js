import Order from "../../../component/fragment/order";
import { fetchOrder } from "../../../api/order";
import { useEffect, useState } from "react";

const OrderPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const getOrder = async (page, limit) => {
    await fetchOrder(page, limit)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setData(data);
        }
      })
      .catch((e) => console.log(e));
  };

  const deleteOrder = () => {
    window.alert("Order Deleted");
  };

  const header = ["NO", "Product", "Email", "Gender", "Action"];

  useEffect(() => {
    getOrder(page, limit);
  }, []);

  const handleNext = () => {
    setPage(page => page + 1)
  }

  const handlePrev = () => {
    setPage(page => page - 1)
  }

  useEffect(() => {
    getOrder(page, limit);
  }, [page]);

  return (
    <div>
      <Order
        header={header}
        data={data}
        onClick={() => deleteOrder()}
        paginate={true}
        page={page}
        handlePrev={() => handlePrev()}
        handleNext={() => handleNext()}
      />
    </div>
  );
};

export default OrderPage;