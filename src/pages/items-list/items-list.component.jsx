import React from "react";

import "./items-list.styles.scss";
import ListItem from "../../components/list-item/list-item.component";

class ListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItem = null;
    listItem = this.state.items.map(item => {
      return (
        <ListItem
          name={item.name}
          ean={item.ean}
          type={item.type}
          weight={item.weight}
          color={item.color}
          quantity={item.quantity}
          price={item.price}
        />
      );
    });
    return <div className="items-list">{listItem}</div>;
  }
}

// const mapStateToProps = state => (
// 	const { items } = state
// )

export default ListPage;
