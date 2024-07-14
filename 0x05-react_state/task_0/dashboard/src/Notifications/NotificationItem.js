import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li className={type === "default" ? css(styles.default) : css(styles.urgent)} onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? <li onClick={() => markAsRead(id)} data-urgent className={css(styles.urgent)} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );
  }
}


const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const onSmall = {
  fontSize: '20px',
  padding: '10px 8px',
  borderBottom: '1px solid black',
  listStyle: 'none',
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
    [screenSize.small]: onSmall,
  },
  urgent: {
    color: "red",
    [screenSize.small]: onSmall,
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

export default NotificationItem;
