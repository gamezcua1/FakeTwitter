import React, { useState, Fragment } from 'react';

import 'antd/dist/antd.css';
import { Modal } from 'antd';

const NiceModal = (props) => {
	const { titulo, botonTitulo, button, children } = props;
	const [ visible, setVisible ] = useState(false);

	const toggle = () => setVisible(!visible);

	return (
		<Fragment>
			{button ? React.cloneElement(button, { onClick: toggle }) : <button onClick={toggle}>{botonTitulo}</button>}
			<Modal title={titulo} onCancel={toggle} visible={visible} footer={null}>
				{React.cloneElement(children, { cerrarModal: toggle })}
			</Modal>
		</Fragment>
	);
};

export default NiceModal;
