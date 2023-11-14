import React, { useMemo, useState } from "react";
import { Button, Modal, Upload, message } from "antd";
import Select from "react-select";
import countryList from "react-select-country-list";
import PlayerCard from "../../components/player-card";
import { UploadOutlined } from "@ant-design/icons";
import CarCard from "../../components/car-card";

function Teams() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="mx-0 md:mx-24 ">
      <div className="page-heading-container mt-20">
        <h1 className="page-heading ">F1 Teams 2023</h1>
        <button
          className="black-button"
          onClick={() => setIsOpen(true)}
          type="button"
          data-drawer-target="drawer-contact"
          data-drawer-show="drawer-contact"
          aria-controls="drawer-contact"
        >
          Add Team
        </button>
      </div>
      <div className="bg-[#dedede99] rounded-lg my-10 p-4">
        <p className="font-[sans-serif] font-thin text-[16px] text-black max-w-[100%] lg:max-w-[70%]">
          Discover everything you need to know about this year's Formula 1 teams
          - drivers, podium finishes, points earned and championship titles.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {/* player card */}
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      {/* Add Form in side drawer */}
      <Modal
        title="Add Team"
        centered
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        footer={null}
      >
        <form action="#" className="mb-5 mt-6 bg-white">
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Driver 1
            </label>
            <Select options={options} value={value} onChange={changeHandler} />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Driver 2
            </label>
            <Select options={options} value={value} onChange={changeHandler} />
          </div>
          <div className="mb-5">
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Manufacturer
            </label>
            <input
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Vehicle Image (PNG)
            </label>
            <Upload
              beforeUpload={(file) => {
                const isPNG = file.type === "image/png";
                if (!isPNG) {
                  message.error(`${file.name} is not a png file`);
                }
                return isPNG || Upload.LIST_IGNORE;
              }}
              onChange={(info) => {
                console.log(info.fileList);
              }}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Teams;
