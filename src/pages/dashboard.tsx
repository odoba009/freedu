import "./css/dashboard.css"
import transfer from "../assets/transfer.png"
import loan from "../assets/loan.png"
import menu from "../assets/menu.png"
import deposit from "../assets/deposit.png"
import info from "../assets/info.png"
import { toast } from 'react-toastify'

export default function Dashboard() {
    return (
        <div>
            <div className="dashboard-nav">
                <div style={{height:30, marginLeft:20}}>
                    <img style={{height:"100%", objectFit:"contain"}} src={menu} alt="" />
                </div>
                <div className="audiowide">TrustFund Home</div>
                <div></div>
            </div>

            <div className='container'>

                <p style={{ margin: "20px 0", fontWeight:"bold" }}>Welcome, MW L&M record</p>
                <div className="dashboard-container">
                    <div>
                    <div className="accounts">
                        <div style={{ marginLeft: 10, fontSize: 20, color: "gray" }}>
                            <p style={{fontWeight:"bold"}}>Accounts</p>
                        </div>
                        <div className="acc-summary">
                            <div>
                                <p>Checking</p>
                                <p> <small> x3527 </small></p>
                            </div>

                            <div>
                                <p>$41,463,000.00</p>
                                <p><small>Available</small></p>
                            </div>
                        </div>
                        {/* <div style={{backgroundColor:"#002d7b", margin:"0 20px", padding:"10px"}}>
                        Transactions
                    </div> */}
                    </div>

                    <div className="dashboard-options">
                        <p style={{ textAlign: "center", fontSize: 20, color: "gray", fontWeight: "bold" }} className="audiowide">Trustfund</p>
                        <div className="dash-options">
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.warning("You do not have permission to perform this task")}>
                                <div className="item-img">
                                    <img src={transfer} alt="" />
                                </div>
                                <small>Transfer</small>
                            </div>
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.warning("You do not have permission to perform this task")}>
                                <div className="item-img">
                                    <img src={deposit} alt="" />
                                </div>
                                <small>Deposit</small>
                            </div>
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.warning("You do not have permission to perform this task")}>
                                <div className="item-img">
                                    <img src={loan} alt="" />
                                </div>
                                <small>Loan</small>
                            </div>
                            <div className="items" style={{ cursor: "pointer" }} onClick={() => toast.warning("You do not have permission to perform this task")}>
                                <div className="item-img">
                                    <img src={info} alt="" />
                                </div>
                                <small>Info</small>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="transactions">
                        <div style={{ fontSize: 18, color: "gray" }}>
                            <p style={{fontWeight:"bold"}}>Transactions</p>
                        </div>
                        <br />
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - Investment-POI Holdings TXN286ft57-68</p>
                                <small style={{ color: "gray" }}>Dec 22, 2024. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$708,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - Vendor Payment - Orlandum Co.</p>
                                <small style={{ color: "gray" }}>August 13, 2024. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$500,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - Vendor Payment - Oraiz Co.</p>
                                <small style={{ color: "gray" }}>Dec 01, 2023. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$550,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Deposit - x2983</p>
                                <small style={{ color: "gray" }}>Nov 30, 2022. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "green" }}>
                                $1,200,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - Client Refund - Laura Smith - x2983</p>
                                <small style={{ color: "gray" }}>Nov 30, 2022. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$600,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - Investment JKL Partners - x2983</p>
                                <small style={{ color: "gray" }}>May 15, 2022. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$750,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - PROMWORLD CO, LTD -HKHIM</p>
                                <small style={{ color: "gray" }}>May 12, 2022. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$500,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - INTERAC</p>
                                <small style={{ color: "gray" }}>Jul 27, 2021. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$600,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Wire Transfer - Client Refund-Dennis Hicks</p>
                                <small style={{ color: "gray" }}>Jul 27, 2021. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "red" }}>
                                -$529,000.00
                            </div>
                        </div>

                        {/* Txn */}
                        <div className="txn-item" style={{ marginRight: 10 }}>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Opening balance</p>
                                <small style={{ color: "gray" }}>Jan 10, 2020. Checking</small>
                            </div>

                            <div style={{ fontWeight: "bold", color: "green" }}>
                                $45,000,000.77
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
