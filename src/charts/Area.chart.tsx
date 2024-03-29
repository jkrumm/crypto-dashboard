import React, { Component } from 'react';
import { createChart } from 'lightweight-charts';

// interface ISmallChartProps {
// }

// interface ICoinCardSmallState {
// 	myRef: any;
// }

export class AreaChart extends Component {
	chartId: string;
	// divElement: HTMLDivElement | null;
	divElement: any;

	constructor(props) {
		super(props)
		this.state = {
			dimensions: null,
			height: 0,
			width: 0
		};
		this.chartId = 'chart_' + Math.random().toString(36).substr(2, 9);
		this.divElement = null;
	}

	componentDidMount() {
		const height = this.divElement.clientHeight + 1;
		const width = this.divElement.clientWidth;
		this.setState({ height, width });
		const chart = createChart(this.chartId, { 
			width,
			height,
			priceScale: {
				scaleMargins: {
					top: 0.25,
					bottom: 0.4,
				},
				borderVisible: false,
			},
			timeScale: {
				borderVisible: false,
			},
		 });
		 const darkTheme = {
			chart: {
				layout: {
					// backgroundColor: '#2B2B43',
					backgroundColor: 'rgba(0, 0, 0, 0)',
					lineColor: '#2B2B43',
					textColor: '#D9D9D9',
				},
				watermark: {
					color: 'rgba(0, 0, 0, 0)',
				},
				crosshair: {
					color: '#758696',
				},
				grid: {
					vertLines: {
						color: '#2B2B43',
					},
					horzLines: {
						color: '#363C4E',
					},
				},
			},
			series: {
					topColor: 'rgba(32, 226, 47, 0.56)',
					bottomColor: 'rgba(32, 226, 47, 0.04)',
					lineColor: 'rgba(32, 226, 47, 1)',
			},
		};
			
		const lightTheme = {
			chart: {
				layout: {
					// backgroundColor: '#FFFFFF',
					backgroundColor: 'rgba(0, 0, 0, 0)',
					lineColor: '#2B2B43',
					textColor: '#191919',
				},
				watermark: {
					color: 'rgba(0, 0, 0, 0)',
				},
				grid: {
					vertLines: {
						visible: false,
					},
					horzLines: {
						color: '#f0f3fa',
					},
				},
			},
			series: {
					topColor: 'rgba(33, 150, 243, 0.56)',
					bottomColor: 'rgba(33, 150, 243, 0.04)',
					lineColor: 'rgba(33, 150, 243, 1)',
			},
		};
		const areaSeries = chart.addAreaSeries({
			topColor: 'rgba(38,198,218, 0.56)',
			bottomColor: 'rgba(38,198,218, 0.04)',
			lineColor: 'rgba(38,198,218, 1)',
			lineWidth: 2,
		});
		const volumeSeries = chart.addHistogramSeries({
			color: '#26a69a',
			lineWidth: 2,
			priceFormat: {
				type: 'volume',
			},
			overlay: true,
			scaleMargins: {
				top: 0.8,
				bottom: 0,
			},
		});

		const themesData = {
			Dark: darkTheme,
			Light: lightTheme,
		};

		function syncToTheme(theme) {
			chart.applyOptions(themesData[theme].chart);
			areaSeries.applyOptions(themesData[theme].series);
		}

		syncToTheme('Dark');

		areaSeries.setData([
			{ time: '2018-10-19', value: 35.98 },
			{ time: '2018-10-22', value: 35.75 },
			{ time: '2018-10-23', value: 35.65 },
			{ time: '2018-10-24', value: 34.12 },
			{ time: '2018-10-25', value: 35.84 },
			{ time: '2018-10-26', value: 35.24 },
			{ time: '2018-10-29', value: 35.99 },
			{ time: '2018-10-30', value: 37.71 },
			{ time: '2018-10-31', value: 38.14 },
			{ time: '2018-11-01', value: 37.95 },
			{ time: '2018-11-02', value: 37.66 },
			{ time: '2018-11-05', value: 38.02 },
			{ time: '2018-11-06', value: 37.73 },
			{ time: '2018-11-07', value: 38.30 },
			{ time: '2018-11-08', value: 38.30 },
			{ time: '2018-11-09', value: 38.34 },
			{ time: '2018-11-12', value: 38.00 },
			{ time: '2018-11-13', value: 37.72 },
			{ time: '2018-11-14', value: 38.29 },
			{ time: '2018-11-15', value: 38.49 },
			{ time: '2018-11-16', value: 38.59 },
			{ time: '2018-11-19', value: 38.18 },
			{ time: '2018-11-20', value: 36.76 },
			{ time: '2018-11-21', value: 37.51 },
			{ time: '2018-11-23', value: 37.39 },
			{ time: '2018-11-26', value: 37.77 },
			{ time: '2018-11-27', value: 38.36 },
			{ time: '2018-11-28', value: 39.06 },
			{ time: '2018-11-29', value: 39.42 },
			{ time: '2018-11-30', value: 39.01 },
			{ time: '2018-12-03', value: 39.15 },
			{ time: '2018-12-04', value: 37.69 },
			{ time: '2018-12-06', value: 37.88 },
			{ time: '2018-12-07', value: 37.41 },
			{ time: '2018-12-10', value: 37.35 },
			{ time: '2018-12-11', value: 36.84 },
			{ time: '2018-12-12', value: 36.98 },
			{ time: '2018-12-13', value: 36.76 },
			{ time: '2018-12-14', value: 36.34 },
			{ time: '2018-12-17', value: 36.21 },
			{ time: '2018-12-18', value: 35.65 },
			{ time: '2018-12-19', value: 35.19 },
			{ time: '2018-12-20', value: 34.62 },
			{ time: '2018-12-21', value: 33.75 },
			{ time: '2018-12-24', value: 33.07 },
			{ time: '2018-12-26', value: 34.14 },
			{ time: '2018-12-27', value: 34.47 },
			{ time: '2018-12-28', value: 34.35 },
			{ time: '2018-12-31', value: 34.05 },
			{ time: '2019-01-02', value: 34.37 },
			{ time: '2019-01-03', value: 34.64 },
			{ time: '2019-01-04', value: 35.81 },
			{ time: '2019-01-07', value: 35.43 },
			{ time: '2019-01-08', value: 35.72 },
			{ time: '2019-01-09', value: 36.06 },
			{ time: '2019-01-10', value: 35.82 },
			{ time: '2019-01-11', value: 35.63 },
			{ time: '2019-01-14', value: 35.77 },
			{ time: '2019-01-15', value: 35.83 },
			{ time: '2019-01-16', value: 35.90 },
			{ time: '2019-01-17', value: 35.91 },
			{ time: '2019-01-18', value: 36.21 },
			{ time: '2019-01-22', value: 34.97 },
			{ time: '2019-01-23', value: 36.89 },
			{ time: '2019-01-24', value: 36.24 },
			{ time: '2019-01-25', value: 35.78 },
			{ time: '2019-01-28', value: 35.37 },
			{ time: '2019-01-29', value: 36.08 },
			{ time: '2019-01-30', value: 35.43 },
			{ time: '2019-01-31', value: 36.57 },
			{ time: '2019-02-01', value: 36.79 },
			{ time: '2019-02-04', value: 36.77 },
			{ time: '2019-02-05', value: 37.15 },
			{ time: '2019-02-06', value: 37.17 },
			{ time: '2019-02-07', value: 37.68 },
			{ time: '2019-02-08', value: 37.60 },
			{ time: '2019-02-11', value: 37.00 },
			{ time: '2019-02-12', value: 37.24 },
			{ time: '2019-02-13', value: 37.03 },
			{ time: '2019-02-14', value: 37.26 },
			{ time: '2019-02-15', value: 37.77 },
			{ time: '2019-02-19', value: 37.55 },
			{ time: '2019-02-20', value: 37.79 },
			{ time: '2019-02-21', value: 38.47 },
			{ time: '2019-02-22', value: 38.61 },
			{ time: '2019-02-25', value: 38.57 },
			{ time: '2019-02-26', value: 38.80 },
			{ time: '2019-02-27', value: 38.53 },
			{ time: '2019-02-28', value: 38.67 },
			{ time: '2019-03-01', value: 39.10 },
			{ time: '2019-03-04', value: 38.73 },
			{ time: '2019-03-05', value: 38.72 },
			{ time: '2019-03-06', value: 38.61 },
			{ time: '2019-03-07', value: 38.38 },
			{ time: '2019-03-08', value: 38.19 },
			{ time: '2019-03-11', value: 39.17 },
			{ time: '2019-03-12', value: 39.49 },
			{ time: '2019-03-13', value: 39.56 },
			{ time: '2019-03-14', value: 39.87 },
			{ time: '2019-03-15', value: 40.47 },
			{ time: '2019-03-18', value: 39.92 },
			{ time: '2019-03-19', value: 39.78 },
			{ time: '2019-03-20', value: 39.47 },
			{ time: '2019-03-21', value: 40.05 },
			{ time: '2019-03-22', value: 39.46 },
			{ time: '2019-03-25', value: 39.18 },
			{ time: '2019-03-26', value: 39.63 },
			{ time: '2019-03-27', value: 40.21 },
			{ time: '2019-03-28', value: 40.42 },
			{ time: '2019-03-29', value: 39.98 },
			{ time: '2019-04-01', value: 40.31 },
			{ time: '2019-04-02', value: 40.02 },
			{ time: '2019-04-03', value: 40.27 },
			{ time: '2019-04-04', value: 40.41 },
			{ time: '2019-04-05', value: 40.42 },
			{ time: '2019-04-08', value: 40.71 },
			{ time: '2019-04-09', value: 41.04 },
			{ time: '2019-04-10', value: 41.08 },
			{ time: '2019-04-11', value: 41.04 },
			{ time: '2019-04-12', value: 41.30 },
			{ time: '2019-04-15', value: 41.78 },
			{ time: '2019-04-16', value: 41.97 },
			{ time: '2019-04-17', value: 42.57 },
			{ time: '2019-04-18', value: 42.43 },
			{ time: '2019-04-22', value: 42.00 },
			{ time: '2019-04-23', value: 41.99 },
			{ time: '2019-04-24', value: 41.85 },
			{ time: '2019-04-25', value: 42.93 },
			{ time: '2019-04-26', value: 43.08 },
			{ time: '2019-04-29', value: 43.45 },
			{ time: '2019-04-30', value: 43.53 },
			{ time: '2019-05-01', value: 43.42 },
			{ time: '2019-05-02', value: 42.65 },
			{ time: '2019-05-03', value: 43.29 },
			{ time: '2019-05-06', value: 43.30 },
			{ time: '2019-05-07', value: 42.76 },
			{ time: '2019-05-08', value: 42.55 },
			{ time: '2019-05-09', value: 42.92 },
			{ time: '2019-05-10', value: 43.15 },
			{ time: '2019-05-13', value: 42.28 },
			{ time: '2019-05-14', value: 42.91 },
			{ time: '2019-05-15', value: 42.49 },
			{ time: '2019-05-16', value: 43.19 },
			{ time: '2019-05-17', value: 43.54 },
			{ time: '2019-05-20', value: 42.78 },
			{ time: '2019-05-21', value: 43.29 },
			{ time: '2019-05-22', value: 43.30 },
			{ time: '2019-05-23', value: 42.73 },
			{ time: '2019-05-24', value: 42.67 },
			{ time: '2019-05-28', value: 42.75 },
		]);

		volumeSeries.setData([
			{ time: '2018-10-19', value: 19103293.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-10-22', value: 21737523.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-10-23', value: 29328713.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-10-24', value: 37435638.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-10-25', value: 25269995.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-10-26', value: 24973311.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-10-29', value: 22103692.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-10-30', value: 25231199.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-10-31', value: 24214427.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-01', value: 22533201.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-02', value: 14734412.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-05', value: 12733842.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-06', value: 12371207.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-07', value: 14891287.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-08', value: 12482392.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-09', value: 17365762.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-12', value: 13236769.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-13', value: 13047907.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-14', value: 18288710.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-15', value: 17147123.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-16', value: 19470986.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-19', value: 18405731.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-20', value: 22028957.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-21', value: 18482233.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-23', value: 7009050.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-26', value: 12308876.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-27', value: 14118867.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-11-28', value: 18662989.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-29', value: 14763658.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-11-30', value: 31142818.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-12-03', value: 27795428.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-04', value: 21727411.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-06', value: 26880429.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-07', value: 16948126.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-10', value: 16603356.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-12-11', value: 14991438.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-12-12', value: 18892182.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-13', value: 15454706.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-14', value: 13960870.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-17', value: 18902523.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-18', value: 18895777.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-19', value: 20968473.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-12-20', value: 26897008.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-21', value: 55413082.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-24', value: 15077207.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2018-12-26', value: 17970539.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-12-27', value: 17530977.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-12-28', value: 14771641.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2018-12-31', value: 15331758.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-02', value: 13969691.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-03', value: 19245411.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-04', value: 17035848.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-07', value: 16348982.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-08', value: 21425008.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-09', value: 18136000.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-10', value: 14259910.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-11', value: 15801548.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-14', value: 11342293.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-15', value: 10074386.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-16', value: 13411691.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-17', value: 15223854.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-18', value: 16802516.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-22', value: 18284771.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-23', value: 15109007.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-24', value: 12494109.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-25', value: 17806822.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-28', value: 25955718.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-29', value: 33789235.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-01-30', value: 27260036.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-01-31', value: 28585447.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-01', value: 13778392.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-02-04', value: 15818901.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-02-05', value: 14124794.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-06', value: 11391442.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-02-07', value: 12436168.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-02-08', value: 12011657.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-11', value: 9802798.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-12', value: 11227550.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-13', value: 11884803.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-14', value: 11190094.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-02-15', value: 15719416.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-19', value: 12272877.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-20', value: 11379006.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-21', value: 14680547.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-22', value: 12534431.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-25', value: 15051182.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-02-26', value: 12005571.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-02-27', value: 8962776.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-02-28', value: 15742971.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-01', value: 10942737.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-04', value: 13674737.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-03-05', value: 15749545.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-03-06', value: 13935530.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-03-07', value: 12644171.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-08', value: 10646710.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-11', value: 13627431.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-12', value: 12812980.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-03-13', value: 14168350.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-14', value: 12148349.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-15', value: 23715337.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-18', value: 12168133.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-03-19', value: 13462686.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-03-20', value: 11903104.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-21', value: 10920129.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-22', value: 25125385.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-25', value: 15463411.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-26', value: 12316901.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-27', value: 13290298.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-03-28', value: 20547060.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-03-29', value: 17283871.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-01', value: 16331140.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-02', value: 11408146.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-03', value: 15491724.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-04', value: 8776028.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-05', value: 11497780.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-08', value: 11680538.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-09', value: 10414416.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-10', value: 8782061.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-11', value: 9219930.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-12', value: 10847504.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-15', value: 7741472.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-16', value: 10239261.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-17', value: 15498037.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-18', value: 13189013.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-22', value: 11950365.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-23', value: 23488682.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-24', value: 13227084.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-25', value: 17425466.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-04-26', value: 16329727.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-29', value: 13984965.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-04-30', value: 15469002.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-01', value: 11627436.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-02', value: 14435436.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-03', value: 9388228.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-06', value: 10066145.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-07', value: 12963827.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-08', value: 12086743.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-09', value: 14835326.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-10', value: 10707335.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-13', value: 13759350.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-14', value: 12776175.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-15', value: 10806379.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-16', value: 11695064.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-17', value: 14436662.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-20', value: 20910590.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-21', value: 14016315.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-22', value: 11487448.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-23', value: 11707083.00, color: 'rgba(255,82,82, 0.8)' },
			{ time: '2019-05-24', value: 8755506.00, color: 'rgba(0, 150, 136, 0.8)' },
			{ time: '2019-05-28', value: 3097125.00, color: 'rgba(0, 150, 136, 0.8)' },
		]);
	}

	render() {
		return (
			<div className="chart chart-small" ref={ (divElement) => this.divElement = divElement}>
					<div id={this.chartId}/>
			</div>
		)
	}
}