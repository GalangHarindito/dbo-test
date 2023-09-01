import { useEffect, useMemo, useState } from "react";
import Table from "../../base/table";
import "./style.css";
import Button from "../../base/button";
import Modal from "../../base/modal";
import { fetchDetailCustomer } from "../../../api/customer";

const Customer = ({ data, onClick, paginate, page, handlePrev, handleNext }) => {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");
  const [detailCustomer, setDetailCustomer] = useState({});
  console.log(page)
  const columns = useMemo(
    () => [
      {
        Header: "Customer Management",
        columns: [
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "first_name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Gender",
            accessor: "gender",
          },
          {
            Header: "Action",
            accessor: "",
            Cell: ({ cell }) => (
              <Button
                type="button"
                classname="btn-danger btn-sm"
                label="Delete"
                onClick={onClick}
              />
            ),
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    getDetailCustomer(id)
  }, [id]);

  const getDetailCustomer = async (id) => {
    await fetchDetailCustomer(id)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setDetailCustomer(data);
        }
      })
      .catch((e) => console.log(e));
  };

  const handleDetail = (id) => {
    setId(id);
    setOpenModal(true);
  };

  return (
    <div>
      <div className="wrapper-customer">
        <Table
          data={data}
          columns={columns}
          onClick={(data) => handleDetail(data.id)}
          paginate={paginate}
          page={page}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>

      <Modal show={openModal} close={() => setOpenModal(false)}>
        <p>First Name: <strong>{detailCustomer.first_name}</strong></p>
        <p>Last Name: <strong>{detailCustomer.last_name}</strong></p>
        <p>Email: <strong>{detailCustomer.email}</strong></p>
        <p>Gender: <strong>{detailCustomer.gender}</strong></p>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={() => console.log('ss')}>Close</button>
      </div>
      </Modal>
    </div>
  );
};

export default Customer;
