import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Receipt,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar({page, setpage}) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" onClick={() => setpage(1)}>
              {page == 1 ? (
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon active" />
                  Home
                </li>
              ): (
                <li className="sidebarListItem">    
                  <LineStyle className="sidebarIcon" />
                  Home
                </li> 
              ) }
            </Link>
            <Link to="/analytics" className="link" onClick={() => setpage(2)}>
              {page == 2 ? (
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon active" />
                  Analytics
                </li>
              ): (
                <li className="sidebarListItem">    
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li> 
              ) }
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link" onClick={() => setpage(3)}>
              {page == 3 ? (
                <li className="sidebarListItem">
                  <Receipt className="sidebarIcon active" />
                  Users
                </li>
              ): (
                <li className="sidebarListItem">    
                      <Receipt className="sidebarIcon" />
                  Users
                </li> 
              ) }
            </Link>
            <Link to="/products" className="link" onClick={()=>setpage(4)}>
              {page == 4 ? (
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon active" />
                  Invoices
                </li>
              ): (
                <li className="sidebarListItem">    
                      <PermIdentity className="sidebarIcon" />
                  Invoices
                </li> 
              ) }
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
