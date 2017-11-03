import React from "react";
import { Row, Col ,Menu, Icon , Layout  } from 'antd';
const {Header,Footer , Content,Sider } = Layout
const {Item} = Menu;
import EnvDeteriorate from './envDeteriorate.jsx'
import CurrencyDevaluation from './currencyDevaluation.jsx'
import RealEstate from './realEstate.jsx'
import Git from './git.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
// import Prismjs from "prismjs"

export default class Blog1 extends React.Component {
  // componentDidUpdate(){
  //   Prismjs.highlightAll()
  // }
  render() {
    const { match } = this.props
    return (
      <Layout>
        <Row type='flex'>
          <Col xs={24} sm={24} md={6} lg={4} className='slide'>
            <Menu
              defaultSelectedKeys={[String(location.pathname.split('/')[2])]}
              style={{ height: '100%', borderRight: 1 }}>
              <Item key="undefined">
                <Link to={match.path}>生存环境恶化</Link>
              </Item>
              <Item key="currencyDevaluation">
                <Link to={`${match.path}/currencyDevaluation`}>货币贬值</Link>
              </Item>
              <Item key="realEstate">
                <Link to={`${match.path}/realEstate`}>房地产</Link>
              </Item>
              <Item key="git">
                <Link to={`${match.path}/git`}>git使用篇</Link>
              </Item>
              <Item disabled key="blog">
                <Link to={`${match.path}/blog`}>博客搭建</Link>
              </Item>
            </Menu>
          </Col>
          <Col xs={24} sm={24} md={18} lg={20}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Row className="container-context" type='flex' justify='center'>
                <Route exact path={match.path} component={EnvDeteriorate} />
                <Route path={`${match.path}/currencyDevaluation`} component={CurrencyDevaluation} />
                <Route path={`${match.path}/realEstate`} component={RealEstate} />
                <Route path={`${match.path}/git`} component={Git} />
              </Row>
            </Content>
          </Col>
        </Row>
      </Layout>
    );
  }
}
