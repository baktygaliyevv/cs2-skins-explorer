import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "../Components/Card";
import PaginationComponent from "../Components/Pagination";

const SkinsComponent = ({ apiEndpoint }) => {
  const { category, subcategory } = useParams();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(32);

  useEffect(() => {
    const endpoint = subcategory
      ? `${apiEndpoint}/${category}/${subcategory}`
      : `${apiEndpoint}/${category}`;

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, [apiEndpoint, category, subcategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      {!subcategory && (
        <PaginationComponent
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
      )}
      <Row>
        {currentItems.map((item, index) => (
          <Col className="card-component" key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={item.name}
              text={item.rarity}
              img_src={item.image}
            />
          </Col>
        ))}
      </Row>
      {!subcategory && (
        <PaginationComponent
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
      )}
    </Container>
  );
};

export default SkinsComponent;
