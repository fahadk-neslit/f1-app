import * as React from "react";
import RaceTable from "../../components/raceTable/raceTable";
import { Modal } from "antd";



function Results() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <div className="flex flex-col space-y-16 mt-[4rem]">
                <div className="flex ml-auto">
                    <button
                        className="black-button"
                        onClick={() => setIsOpen(true)}
                        type="button"

                        data-drawer-target="drawer-contact"
                        data-drawer-show="drawer-contact"
                        aria-controls="drawer-contact"
                    >
                        Add Result
                    </button>
                </div>
                <RaceTable />
            </div>
            <Modal
                title="Add Race Result"
                centered
                open={isOpen}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
                footer={null}
            >
                <form action="#" className="mb-5 mt-6 bg-white">
                    <div className="mb-5">
                        <label
                            for="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Winner Name
                        </label>
                        <input

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            for="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Grand Prix
                        </label>
                        <input

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            for="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Number of Laps
                        </label>
                        <input
                            type="number"
                            min={1}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            for="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Winner Time
                        </label>
                        <input
                            type="time"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
                    >
                        Submit
                    </button>
                </form>
            </Modal>
        </>

    )

}

export default Results;
