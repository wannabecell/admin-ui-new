import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

function DashboardPage() {
  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
        {/* Baris Atas */}
        <div className="sm:col-span-4">
          <Card
            title="Total Balance"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!"
          />
        </div>
        <div className="sm:col-span-4">
          <Card
            title="Goals"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!"
          />
        </div>
        <div className="sm:col-span-4">
          <Card
            title="Upcoming Bill"
            link="/bill"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!"
          />
        </div>

        {/* Baris Tengah & Bawah */}
        <div className="sm:col-span-4 sm:row-span-2">
          <Card
            title="Recent Transaction"
            link="/transaction"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!"
          />
        </div>
        <div className="sm:col-span-8">
          <Card
            title="Statistics"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!"
          />
        </div>
        <div className="sm:col-span-8">
          <Card
            title="Expenses Breakdown"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti excepturi accusamus eveniet, quasi, expedita aspernatur minima dolor placeat voluptates laborum quis quos. Illo, quas sunt nobis soluta voluptas asperiores!"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default DashboardPage;