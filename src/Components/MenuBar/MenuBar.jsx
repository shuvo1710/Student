import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
  AiFillInfoCircle,
  AiOutlineCreditCard,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { BsCartPlusFill, BsCash } from "react-icons/bs";
import { AiOutlineGateway } from "react-icons/ai";

const MenuBar = () => {
  return (
    <div className="pt-10 border-r bg-white">
      <div className="flex justify-center">
        <div className="avatar ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
            />
          </div>
        </div>
        {/*  */}
      </div>

      <div className=" text-center">
        <p className="mt-5">Md Shahidul Islam</p>
        <p className="mt-4">Patuakhali, Bangladesh</p>
      </div>
      <div className="divider"></div>

      {/* menu items  */}
      <div className="">
        <Link className="flex items-center gap-3 font-semibold mb-4">
          <MdDashboard className="text-xl " /> <span>Account Dashboard</span>
        </Link>

        <Link
          to="/AccountDetails"
          className="flex items-center gap-3 font-semibold mb-4"
        >
          <AiFillInfoCircle className="text-xl " /> <span>Account Details</span>
        </Link>

        <Link
          to="/PurchaseHistory"
          className="flex items-center gap-3 font-semibold mb-4"
        >
          <BsCartPlusFill className="text-xl " /> <span>Purchase History</span>
        </Link>

        <Link
          to="/commissionWithdraw"
          className="flex items-center gap-3 font-semibold mb-4"
        >
          <AiOutlineGateway className="text-xl " />{" "}
          <span>Commission Withdraw</span>
        </Link>

        <Link
          to="/CommissionLedger"
          className="flex items-center gap-3 font-semibold mb-4"
        >
          <AiOutlineGateway className="text-xl " />{" "}
          <span>Commission Ledger</span>
        </Link>

        <Link
          to="/Transactions"
          className="flex items-center gap-3 font-semibold mb-4"
        >
          <AiOutlineCreditCard className="text-xl " /> <span>Transactions</span>
        </Link>

        <Link
          to="/BalanceTransfer"
          className="flex items-center gap-3 font-semibold mb-4"
        >
          <BsCash className="text-xl " /> <span>Balance Transfer</span>
        </Link>

        <Link
          to="/singin"
          className="flex items-center gap-3 font-semibold mb-4"
        >
          <AiOutlinePoweroff className="text-xl " /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
