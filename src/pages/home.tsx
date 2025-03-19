import { Link } from "react-router-dom";
import "./css/homepage.css";

export default function Home() {

    return (
        <div>
            <div className="navbar Arvextaservices">
                <div className="brand" style={{ "fontSize": "20px;" }}>
                    Freedo
                </div>

                <div>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>

            <div className="banner" style={{ textAlign: "center", color: "white", padding: "50px 0" }}>
                <p style={{ fontSize: 30, margin: "20px 0" }}>Spend. Save. Earn</p>
                <p>Earn 5% APY* on up to $25,000 with Dividend Rewards Checking when monthly qualifications are met.</p>
                <button className="btn-info" style={{ margin: "20px 0" }}>Learn more</button>
            </div>

            <div className="section-2">
                <p className="sub-heading">Special Auto Loan Rates Available</p>
                <p>Our car loan rates recently dropped by 0.50% on all model years and terms. Rates are as low as 5.19% APR for a limited time only!</p>
            </div>

            <div className="banner" style={{ textAlign: "center", color: "white", padding: "50px 0" }}>
                <p style={{ fontSize: 30, margin: "20px 0" }}>Spend. Save. Earn</p>
                <p>Earn 5% APY* on up to $25,000 with Dividend Rewards Checking when monthly qualifications are met.</p>
                <button className="btn-info" style={{ margin: "20px 0" }}>Learn more</button>
            </div>
        </div>
    )
}
