import React, { Component } from 'react';

import { 
	Layout,
	Menu,
	Icon
 } from 'antd';

import QueueBar from './containers/QueueBar';
import PlayerBar from './containers/PlayerBar';

import './scss/App.css';

class App extends Component {
	state = {
		collapsed: false,
	}
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	}
	render() {
		const { Header, Footer, Sider, Content } = Layout;
		const { SubMenu } = Menu;
		return (
			<div>
				<Layout style={{ minHeight: '100vh' }}>
					<Sider
						collapsible
						collapsed={this.state.collapsed}
						trigger={null}
					>
						<QueueBar />
					</Sider>

						
					<Layout>
						<Header>Header</Header>
						<Content>
							<div style={{height: '1000px'}} >
								HI
							</div>
						</Content>
						<Footer>
							<PlayerBar />
						</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default App;
