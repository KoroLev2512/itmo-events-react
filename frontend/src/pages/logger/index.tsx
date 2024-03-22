import React from "react";
import {GetServerSideProps, NextPage} from "next";
import axiosForServer from "../../lib/api/axiosForServer";
import {FETCH_LOGS} from "../../lib/api/requests/event.requests";
import axios from "../../lib/api/axios";
import {SecondaryButton} from "../../ui/Button";

function LogList({ logs }) {
	return (
		<div>
			{logs?.map((log, index) => (
				<div key={index}>
					<label style={{color:"#E77E19"}}>{log.log[0]}{" "}</label>
					{log.log[1] === null ? ("null")
						: (typeof log.log[1] === "object" ? ( <pre>{JSON.stringify(log.log[1], null, 2)}</pre>) : (log.log[1]))
					}
				</div>
			))}
		</div>
	);
}

interface IProps {
	logs: object[]
}

export const getServerSideProps: GetServerSideProps<IProps | object> = async () => {
	try {
		const {data: logs} = await axiosForServer(FETCH_LOGS);
		return {
			props: {logs}
		};
	} catch (error) {
		console.error("Ошибка при получении логов:", error);
		return { props: {} };
	}
};

const LoggerPage: NextPage<IProps> = (props) => {
	const {logs} = props;
	const divStyle = {
		backgroundColor: "black",
		color: "#C8D1D4",
		fontFamily: "monospace",
		padding: "30px 10px 100px 30px",
		borderRadius:"30px",
		overflow:"hidden",
		boxShadow:"0 0 15px rgba(0,0,0,0.8)",
	};
	return (
		<div style={divStyle}>
			<SecondaryButton onClick={() => {
				axios.get("/logger/clear").then(r => {
					console.log(r);});
			}}>очистить логи</SecondaryButton>
			<h1 style={{color:"white"}}>ITMO.EVENTS custom logs </h1>
			<LogList logs={logs} />
		</div>
	);
};

export default LoggerPage;
