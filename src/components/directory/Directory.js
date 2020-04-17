import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/MenuItem";

import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ directory }) => ({ sections: directory.sections });

export default connect(mapStateToProps)(Directory);
