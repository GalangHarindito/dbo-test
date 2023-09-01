import { useEffect, useMemo, useState } from "react";
import Table from "../../base/table";
import "./style.css";
import Button from "../../base/button";
import Modal from "../../base/modal";
import { fetchDetailOrder } from "../../../api/order";
import { toCurrency } from "../../../helpers/format";

const Order = ({ data, onClick, paginate, page, handlePrev, handleNext }) => {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");
  const [detailOrder, setDetailOrder] = useState({});

  const columns = useMemo(
    () => [
      {
        Header: "Order Management",
        columns: [
          {
            Header: "Id",
            accessor: "id",
            maxWidth: 400,
            minWidth: 140,
            width: 200,
          },
          {
            Header: "Product",
            accessor: "product",
          },
          {
            Header: "Amount",
            accessor: "amount",
          },
          {
            Header: "Price ($)",
            accessor: "price",
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
    getDetailOrder(id);
  }, [id]);

  const getDetailOrder = async (id) => {
    await fetchDetailOrder(id)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setDetailOrder(data);
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
      <div className="wrapper-Order">
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
        <p>
          Product: <strong>{detailOrder.product}</strong>
        </p>
        <p>
          Amount: <strong>{detailOrder.amount}</strong>
        </p>
        <p>
          Price: <strong>{detailOrder.price}</strong>
        </p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => setOpenModal(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Order;
