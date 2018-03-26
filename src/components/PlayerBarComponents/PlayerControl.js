import React from 'react';
import { Icon, Col, Button } from 'antd';

export const PlayerControl = () => {
	return (
		<div>
			<Col span={4}>
				<button className='player-button'>
					<Icon type='fast-backward' />
				</button>
			</Col>
			<Col span={4}>
				<button className='player-button'>
					<Icon type='step-backward' />
				</button>
			</Col>
			<Col span={4}>
				<button className='player-button'>
					<Icon type='play-circle-o' />
				</button>
			</Col>
			<Col span={4}>
				<button className='player-button'>
					<Icon type='step-forward' />
				</button>
			</Col>
			<Col span={4}>
				<button className='player-button'>
					<Icon type='fast-forward' />
				</button>
			</Col>
		</div>
	);
};

