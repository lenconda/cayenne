import React, { useState } from 'react';
import Modal from '@components/Modal';
import './index.scss';

const ModalPage: React.FC = () => {
  return (
    <section>
      <h2>Modal</h2>
      <div className="demo"></div>
    </section>
  );
};

export default ModalPage;

// const BasicDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>Open Modal</button>
//       <div>
//         <code>
//           <div>{'<Modal modalTitle="Basic Usage">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} modalTitle="Basic Usage">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const CloseOnClickMaskEnabledDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>
//         {unescape('closeOnBackdropClick={true} *default')}
//       </button>
//       <div>
//         <code>
//           <div>{'<Modal closeOnBackdropClick={true} modalTitle="Try to Click Mask">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} closeOnBackdropClick={true} modalTitle="Try to Click Mask">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const CloseOnClickMaskDisabledDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>
//         {unescape('closeOnBackdropClick={false}')}
//       </button>
//       <div>
//         <code>
//           <div>{'<Modal closeOnBackdropClick={false} modalTitle="Try to Click Mask">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} closeOnBackdropClick={false} modalTitle="Try to Click Mask">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const SizeSmDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>{unescape('size="sm"')}</button>
//       <div>
//         <code>
//           <div>{'<Modal size="sm" modalTitle="Small Size">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} size="sm" modalTitle="Small Size">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const SizeMdDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>{unescape('size="md" *default')}</button>
//       <div>
//         <code>
//           <div>{'<Modal size="md" modalTitle="Medium(Default) Size">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} size="md" modalTitle="Medium(Default) Size">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const SizeLgDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>{unescape('size="lg"')}</button>
//       <div>
//         <code>
//           <div>{'<Modal size="lg" modalTitle="Large Size">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} size="lg" modalTitle="Large Size">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const SizeXlDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>{unescape('size="xl"')}</button>
//       <div>
//         <code>
//           <div>{'<Modal size="xl" modalTitle="Extra Large Size">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} size="xl" modalTitle="Extra Large Size">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const CenteredDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>{unescape('centered={true}')}</button>
//       <div>
//         <code>
//           <div>{'<Modal centered={true} modalTitle="Centered">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} centered={true} modalTitle="Centered">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const ScrollableDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>{unescape('scrollable={true}')}</button>
//       <div>
//         <code>
//           <div>{'<Modal scrollable={true} modalTitle="Long Content Scrollable">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} scrollable={true} modalTitle="Long Content Scrollable">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore assumenda ratione provident fuga repudiandae tempora maxime ea illum. Fugiat adipisci, voluptatem unde minima animi temporibus ipsum corrupti dolor similique!</p>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere qui quae enim! Molestiae ut voluptates debitis distinctio doloribus unde amet ipsa nam iste consectetur doloremque, aperiam repellendus id, ipsum placeat.</p>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum reiciendis, nesciunt sequi at placeat molestias tempora magni inventore asperiores id mollitia ad sit? Blanditiis repellat quo perspiciatis odio ex quaerat.</p>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione enim sed labore assumenda iure fuga pariatur deserunt similique autem earum a facilis doloribus accusantium inventore nisi, eveniet itaque. Nemo, et.</p>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In esse repellendus itaque! Non commodi ad quibusdam deleniti deserunt rerum quos ducimus ea quo. Nulla ducimus optio, saepe ex distinctio porro!</p>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id accusantium iusto rerum sapiente perspiciatis, eveniet voluptates voluptatum quos repellat blanditiis! Consectetur, eaque. Accusamus voluptate temporibus eos perspiciatis sit numquam repudiandae!</p>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eos doloribus iure delectus itaque dolorem praesentium dolore molestiae sed, enim totam ipsa consequatur repellat, voluptates vel, commodi quidem cupiditate in.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim iste eos, eum rerum autem voluptas assumenda recusandae aliquam libero officia odit nihil laborum, consectetur ea sequi doloribus reprehenderit tempore.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod a tenetur quia quasi dolorum odit aliquid non excepturi inventore beatae eligendi, eaque molestias facilis perspiciatis optio ab magni? Recusandae?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// const DraggableDemo: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button className="btn btn-secondary demo" type="button" onClick={() => setOpen(true)}>{unescape('draggable={true}')}</button>
//       <div>
//         <code>
//           <div>{'<Modal draggable={true} modalTitle="Draggable">'}</div>
//           <div>&nbsp;&nbsp;{'{//...}'}</div>
//           <div>{'</Modal>'}</div>
//         </code>
//       </div>
//       <Modal open={open} onClose={() => setOpen(false)} draggable={true} modalTitle="Draggable">
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
//       </Modal>
//       <hr />
//     </>
//   );
// };

// ReactDOM.render(<BasicDemo />, document.getElementById('demo-basic-usage'));
// ReactDOM.render(<CloseOnClickMaskEnabledDemo />, document.getElementById('demo-mask-enabled'));
// ReactDOM.render(<CloseOnClickMaskDisabledDemo />, document.getElementById('demo-mask-disabled'));
// ReactDOM.render(<SizeSmDemo />, document.getElementById('demo-size-sm'));
// ReactDOM.render(<SizeMdDemo />, document.getElementById('demo-size-md'));
// ReactDOM.render(<SizeLgDemo />, document.getElementById('demo-size-lg'));
// ReactDOM.render(<SizeXlDemo />, document.getElementById('demo-size-xl'));
// ReactDOM.render(<CenteredDemo />, document.getElementById('demo-centered'));
// ReactDOM.render(<ScrollableDemo />, document.getElementById('demo-scrollable'));
// ReactDOM.render(<DraggableDemo />, document.getElementById('demo-draggable'));
