import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { PlayerControl } from '../components/PlayerBarComponents/PlayerControl';

import '../scss/PlayerBar.css';

class PlayerBar extends Component {
	render() {
		return(
			<div>
				<Row type='flex' align='middle'>
					<Col span={8} offset={4}>
						<p>Footer</p>
					</Col>
					<Col span={6} offset={2} className='text-center'>
						<PlayerControl />
					</Col>
				</Row>
			</div>
		);
	}
}

export default PlayerBar;