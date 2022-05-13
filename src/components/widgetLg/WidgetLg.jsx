import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Invoices</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Employe</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Litres</th>
          <th className="widgetLgTh">Car</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">BENRABAH Mohamed</span>
          </td>
          <td className="widgetLgDate">12/05/2022</td>
          <td className="widgetLgAmount">22 L</td>
          <td className="widgetLgStatus">Mazda</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">BENRABAH Mohamed</span>
          </td>
          <td className="widgetLgDate">12/05/2022</td>
          <td className="widgetLgAmount">22 L</td>
          <td className="widgetLgStatus">Mazda</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">BENRABAH Mohamed</span>
          </td>
          <td className="widgetLgDate">12/05/2022</td>
          <td className="widgetLgAmount">22 L</td>
          <td className="widgetLgStatus">Mazda</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">BENRABAH Mohamed</span>
          </td>
          <td className="widgetLgDate">12/05/2022</td>
          <td className="widgetLgAmount">22 L</td>
          <td className="widgetLgStatus">Mazda</td>
        </tr>
      </table>
    </div>
  );
}
