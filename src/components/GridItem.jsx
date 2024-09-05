import { useState } from 'react';
import Modal from './Modal';

const GridItem = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div
        style={{ backgroundColor: data.color, cursor: 'pointer' }}
        onClick={handleOpenModal}
      >
        <img src={data.imageUrl} alt={data.title} style={{ width: '100%' }} />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
      {isModalOpen && (
        <Modal content={data.modalContent} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default GridItem;
