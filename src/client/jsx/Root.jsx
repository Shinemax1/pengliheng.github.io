// application
import React from "react";
import {
	BrowserRouter as Router,
	Link,
	Switch,
} from "react-router-dom";
import {
	IndexLink
} from "react-router"
import {Provider,observer} from "mobx-react"
import { Route, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { Menu, Icon, Layout } from 'antd';

// local
import store from "../store/"
import Life from "./blog/life/index.jsx";
import ReactAPI from "./blog/reactapi/index.jsx";
import GoLang from "./blog/golang/index.jsx";
import Home from "./blog/home/index.jsx";
import NodeJs from "./blog/nodejs/index.jsx";
import Others from "./blog/others/index.jsx";
import NoMatch from './views/404.jsx'
import Render from "./feature/Render.js"

// application
const history = createHistory()

@observer
export default class Root extends React.Component {
	componentWillMount() {
		document.ondragstart = () => false;
	}
	state = {
		current: location.pathname == '/' ? 'reactapi' : location.pathname.split('/')[1],
	}
	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Layout className="layout">
						<Menu onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="horizontal">
							<Menu.Item key="home">
								<Link to='/'>博客简介</Link>
							</Menu.Item>
							<Menu.Item key="reactapi">
								<Link to='/reactapi'>React Tutorial·Translate</Link>
							</Menu.Item>
							<Menu.Item key="golang">
								<Link to='/golang'>GoLang</Link>
							</Menu.Item>
							<Menu.Item key="nodejs">
								<Link to='/nodejs'>NodeJs Diary</Link>
							</Menu.Item>
							<Menu.Item key="life">
								<Link to='/life'>life diary</Link>
							</Menu.Item>
							<Menu.Item key="chatroom">
								<a target='_blank' href='https://chat.pipk.top/group/Moonlight'><span style={{ color: 'black' }}>🔥</span>chat with me?</a>
							</Menu.Item>
							<Menu.Item key="me">
								<a target='_blank' href='https://hacknical.com/resume/r1peg776b?locale=zh'><span style={{ color: 'black' }}>😋</span>我的简历</a>
							</Menu.Item>
							<Menu.Item key="others">
								<Link to='/others'>others</Link>
							</Menu.Item>
							<Menu.Item key="github" style={{ float: "right" }}>
								<iframe
									frameBorder="0" scrolling="0" width="91px" height="20px"
									src="https://ghbtns.com/github-btn.html?user=pengliheng&repo=pengliheng.github.io&type=star&count=true" >
								</iframe>
							</Menu.Item>
						</Menu>
						<Render>
							<Route path="/" component={Home} />
							<Route path="/reactapi" component={ReactAPI} />
							<Route path="/golang" component={GoLang} />
							<Route path="/nodejs" component={NodeJs} />
							<Route path="/life" component={Life} />
							<Route path="/others" component={Others} />
							<Route component={NoMatch} />
						</Render>
					</Layout>
				</Router>
			</Provider>
		);
	}
}
