import React from "react";

import ContentEditable from "react-contenteditable";
import { Table, Button } from "semantic-ui-react";

import { toNumber, formatNumber } from "../utils/xulynumber";

const TableRender = (props) => {
  const renderEl = props.data.map((row, i) => {
    return (
      <Table.Row key={i + 1}>
        <Table.Cell textAlign="center" className="narrow">
          {i + 1}
        </Table.Cell>
        <Table.Cell textAlign="left" className="narrow">
          <ContentEditable
            html={row.loaihang}
            data-column="item"
            data-row={i}
            className="content-editable"
            // onKeyPress={this.disableNewlines}
            // onPaste={this.pasteAsPlainText}
            // onFocus={this.highlightAll}
            // onChange={this.handleContentEditableUpdate}
            // onDoubleClick={this.handleContentEditableUpdate}
          />
        </Table.Cell>
        <Table.Cell textAlign="center" className="narrow">
          <ContentEditable
            html={row.day}
            data-column="item"
            data-row={i}
            className="content-editable"
            // onKeyPress={this.disableNewlines}
            // onPaste={this.pasteAsPlainText}
            // onFocus={this.highlightAll}
            // onChange={this.handleContentEditableUpdate}
            // onDoubleClick={this.handleContentEditableUpdate}
          />
        </Table.Cell>
        <Table.Cell textAlign="center" className="narrow">
          <ContentEditable
            html={row.donvitinh}
            data-column="item"
            data-row={i}
            className="content-editable"
            // onKeyPress={this.disableNewlines}
            // onPaste={this.pasteAsPlainText}
            // onFocus={this.highlightAll}
            // onChange={this.handleContentEditableUpdate}
            // onDoubleClick={this.handleContentEditableUpdate}
          />
        </Table.Cell>
        <Table.Cell textAlign="center" className="narrow">
          <ContentEditable
            html={row.soluong}
            data-column="item"
            data-row={i}
            className="content-editable"
            // onKeyPress={this.disableNewlines}
            // onPaste={this.pasteAsPlainText}
            // onFocus={this.highlightAll}
            // onChange={this.handleContentEditableUpdate}
            // onDoubleClick={this.handleContentEditableUpdate}
          />
        </Table.Cell>
        <Table.Cell textAlign="right" className="narrow">
          <ContentEditable
            html={row.dongia}
            data-column="item"
            data-row={i}
            className="content-editable"
            // onKeyPress={this.disableNewlines}
            // onPaste={this.pasteAsPlainText}
            // onFocus={this.highlightAll}
            // onChange={this.handleContentEditableUpdate}
            // onDoubleClick={this.handleContentEditableUpdate}
          />
        </Table.Cell>
        <Table.Cell textAlign="right" className="narrow">
          <ContentEditable
            html={row.thanhtien}
            data-column="item"
            data-row={i}
            className="content-editable"
            // onKeyPress={this.disableNewlines}
            // onPaste={this.pasteAsPlainText}
            // onFocus={this.highlightAll}
            // onChange={this.handleContentEditableUpdate}
            // onDoubleClick={this.handleContentEditableUpdate}
          />
        </Table.Cell>
      </Table.Row>
    );
  });
  let thanhtien = props.data.reduce((arr, curr) => {
    return toNumber(arr.thanhtien) + toNumber(curr.thanhtien);
  });
  let thanhtienRender = (
    <Table.Row key={thanhtien}>
      <Table.Cell textAlign="center" colSpan="6" className="narrow">
        Tổng
      </Table.Cell>
      <Table.Cell textAlign="right" className="narrow">
        <ContentEditable
          html={formatNumber(thanhtien)}
          data-column="item"
          data-row={26}
          className="content-editable"
          // onKeyPress={this.disableNewlines}
          // onPaste={this.pasteAsPlainText}
          // onFocus={this.highlightAll}
          // onChange={this.handleContentEditableUpdate}
          // onDoubleClick={this.handleContentEditableUpdate}
        />
      </Table.Cell>
    </Table.Row>
  );
  let thanhtoanRender = (
    <Table.Row key={thanhtien + 1}>
      <Table.Cell textAlign="center" colSpan="6" className="narrow">
        Thanh toán
      </Table.Cell>
      <Table.Cell textAlign="right" className="narrow">
        <ContentEditable
          html={"0"}
          data-column="item"
          data-row={27}
          className="content-editable"
          // onKeyPress={this.disableNewlines}
          // onPaste={this.pasteAsPlainText}
          // onFocus={this.highlightAll}
          // onChange={this.handleContentEditableUpdate}
          // onDoubleClick={this.handleContentEditableUpdate}
        />
      </Table.Cell>
    </Table.Row>
  );

  let dunoRener = (
    <Table.Row key={thanhtien + 2}>
      <Table.Cell textAlign="center" colSpan="6" className="narrow">
        Dư nợ
      </Table.Cell>
      <Table.Cell textAlign="right" className="narrow">
        <ContentEditable
          html={"0"}
          data-column="item"
          data-row={28}
          className="content-editable"
          // onKeyPress={this.disableNewlines}
          // onPaste={this.pasteAsPlainText}
          // onFocus={this.highlightAll}
          // onChange={this.handleContentEditableUpdate}
          // onDoubleClick={this.handleContentEditableUpdate}
        />
      </Table.Cell>
    </Table.Row>
  );
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="stt">STT</Table.HeaderCell>
            <Table.HeaderCell>Loại hàng</Table.HeaderCell>
            <Table.HeaderCell>Độ dày</Table.HeaderCell>
            <Table.HeaderCell>ĐVT</Table.HeaderCell>
            <Table.HeaderCell>SL</Table.HeaderCell>
            <Table.HeaderCell>Đơn giá</Table.HeaderCell>
            <Table.HeaderCell>Thành tiền</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* Thông số các loại hàng */}
          {renderEl}
          {/* Thông tin về tổng thành tiền, thanh toán, dư nợ */}
          {thanhtienRender}
          {thanhtoanRender}
          {dunoRener}
        </Table.Body>
      </Table>
    </>
  );
};

export default TableRender;
