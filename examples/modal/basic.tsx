import React, { useState } from 'react';
import Modal from '../../src/components/Modal';
import '../../src/index.scss';

const Basic: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        modalTitle="Basic Usage"
      >This is a basic usage modal.</Modal>
    </div>
  );
};

export default Basic;
