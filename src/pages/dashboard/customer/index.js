import Customer from "../../../component/fragment/customer";
import { fetchCustomer } from "../../../api/customer";
import { useEffect, useState } from "react";

const CustomerPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const getCustomer = async (page, limit) => {
    await fetchCustomer(page, limit)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setData(data);
        }
      })
      .catch((e) => console.log(e));
  };

  const deleteCustomer = () => {
    window.alert("Customer Deleted");
  };

  const header = ["NO", "Name", "Email", "Gender", "Action"];

  useEffect(() => {
    getCustomer(page, limit);
  }, []);

  const handleNext = () => {
    setPage(page => page + 1)
  }

  const handlePrev = () => {
    setPage(page => page - 1)
  }

  useEffect(() => {
    getCustomer(page, limit);
  }, [page]);

  return (
    <div>
      <Customer
        header={header}
        data={data}
        onClick={() => deleteCustomer()}
        paginate={true}
        page={page}
        handlePrev={() => handlePrev()}
        handleNext={() => handleNext()}
      />
    </div>
  );
};

export default CustomerPage;
