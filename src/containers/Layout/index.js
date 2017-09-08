import React from "react"
import "./index.scss"
import JacketComponent from "../Jacket"
import data from "../Jacket/data.json"
import { filteredFromHelper, sortedFromHelper } from "./filters"


export default class LayoutContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            filterChange: null,
            sortChange: null,
            filteredByFilt: data

        }
    }

    
    handleFilterChange = (event) => {
        const aimFilter = event.target.value       
        const filteredByFilt = filteredFromHelper(data, aimFilter)
        this.setState({
            filterChange: aimFilter,
            filteredByFilt
        })
    }
 
    handleSortChange = (event) => {
        const { filteredByFilt } = this.state
        const aimSort = event.target.value   
     const filteredBySort = sortedFromHelper(filteredByFilt, aimSort)

        this.setState({
            sortChange: aimSort,
            filteredByFilt: filteredBySort
        })
        

    }

    render() {
        const { filteredByFilt } = this.state
        return (
            <div>
                <nav className="product-filter">
                    <h1>Jackets</h1>

                    <div className="sort">
                        <div className="collection-sort">
                            <label>Filter by:</label>
                            <select
                                defaultValue={"AllJackets"}
                                onChange={this.handleFilterChange}
                            >
                                <option value="AllJackets">All Jackets</option>
                                <option value="2016">2016</option>
                                <option value="jacket">jacket</option>
                                <option value="Jackets">Jackets</option>
                                <option value="layers">layers</option>
                                <option value="Obermeyer">Obermeyer</option>
                                <option value="Roxy">Roxy</option>
                                <option value="womens">womens</option>
                            </select>
                        </div>

                        <div className="collection-sort">
                            <label>Sort by:</label>
                            <select
                                defaultValue={"Featured"}
                                onChange={this.handleSortChange}
                            >
                                <option value="/">Featured</option>
                                <option value="isBestSelling">Best Selling</option>
                                <option value="AlphAZ">Alphabetically, A-Z</option>
                                <option value="AlphZA">Alphabetically, Z-A</option>
                                <option value="lowHigh">Price, low to high</option>
                                <option value="highLow">Price, high to low</option>
                                <option value="newOld">Date, new to old</option>
                                <option value="oldNew">Date, old to new</option>
                            </select>
                        </div>
                    </div>
                </nav>

                <section className="products">
                    {
                        filteredByFilt.map(jacket => (
                            <JacketComponent
                                {...jacket}
                                key={jacket.id}
                            />
                        ))
                    }



                </section>
            </div>
        )
    }
}