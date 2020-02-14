
import React from 'react'
import './styles.scss'
import FilterBtns from '../common/FilterButton'
import { CLOSE_IMG, GOLD_PHONE, BUTTON_ADD_SMALL, BUTTON_ADDED } from 'common/images'
type Props = {
  isAddModalVisible: boolean,
  deviceByName: Object,
  onAddItemClick: (value1: Object, value2: string) => any,
  onRemoveItemClick: (value1: string, value2: Object) => any,
  filterButtonList: Array<Object>,
  onFilterButtonClick: (item: string) => any,
  activeFilter: string,
  onAddProductClick: (val: any, val: any, val: any) => any,
  onRemoveProductClick: (val: any, val: any) => any,
  activeIndex: number
}
const SearchListForVs = (props: Props) => {
  const { isAddModalVisible, deviceByName, onAddItemClick, onRemoveItemClick, filterButtonList, activeFilter, activeIndex, onFilterButtonClick, onAddProductClick, onRemoveProductClick } = props
  const devices = Object.keys(deviceByName).length
    ? deviceByName.deviceByName.result
    : []
  console.log(filterButtonList)
  return (
    <div className="p_list container">
      <div className="spos-relative">
        <div className="stags_row">
          <FilterBtns
            onClick={onFilterButtonClick}
            activeFilter={activeFilter}
            btnList={filterButtonList}
          />
        </div>
        <div className="product_list_part">
          <ul className={devices ? "ul_production_part" : ""}>
            {
              devices &&
              devices.map((item, index) => {
                const itemObj = {
                  productImg: item.featured_image.thumb,
                  aboutProduct: item.v_brand_name,
                  productName: item.device_name,
                  productId: item.device_id
                }
                return (
                  <li key={index} id={"mini_item" + index} className={"li_item_part"} onClick={() => onAddProductClick(itemObj, itemObj.productId, index)}>
                    <div className="item_adjust">
                      <div className="image_out4">
                        <div className="image_size4">
                          <img src={itemObj.productImg || GOLD_PHONE} />
                        </div>
                      </div>
                      <div className="title_adjust" >
                        <b className="name">{itemObj.productName}</b>
                        <h6 className="about">{itemObj.aboutProduct}</h6>
                      </div>
                    </div>
                    <div>
                      {/* <button type="button" id={"button" + itemObj.productId} className="cstm_plust_search" onClick={() => onAddItemClick(itemObj, itemObj.productId)}><img src={BUTTON_ADD_SMALL} /></button>
                      <button type="button" id={"checkedbutton" + itemObj.productId} className="green_item checkedbutton" onClick={() => onRemoveItemClick(itemObj.productId, itemObj)}><img src={BUTTON_ADDED} /></button> */}

                      <button type="button" id={"button" + itemObj.productId} className="cstm_plust_search"><img src={BUTTON_ADD_SMALL} /></button>
                      <button type="button" id={"checkedbutton" + itemObj.productId} className="green_item checkedbutton"><img src={BUTTON_ADDED} /></button>
                      {/* {
                      !isAddModalVisible && (
                        // <button type="button" className="cstm_plust_search" onClick={visilbeModal}><i className="fa fa-plus"></i></button>
                        <button type="button" id={"button" + index} className="cstm_plust_search" onClick={() => onAddItemClick(index)}><i className="fa fa-plus"></i></button>

                      )
                    }
                    {
                      isAddModalVisible && (
                        // <button type="button" className="green_item" onClick={closeModal}><i className="fa fa-check"></i></button>
                        <button type="button" id={"button" + index} className="green_item" onClick={onRemoveItemClick}><i className="fa fa-check"></i></button>

                      )
                    } */}
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div >
    </div>
  )
}

export default SearchListForVs