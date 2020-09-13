import React from 'react';

//@vkontakte imports
import '@vkontakte/vkui/dist/vkui.css';
import {
	RichCell,
	Group,
	Panel,
	PanelHeader,
	View,
	PanelHeaderBack,
	Button,
	PanelHeaderButton,
	Div
} from "@vkontakte/vkui";

//@vkontakte icons
import {Icon28CalendarOutline, Icon28TargetOutline, Icon28ChevronRightOutline, Icon28CancelOutline} from '@vkontakte/icons';
import TargetDonate from "./panels/targetDonate";
import TargetDonateAdditionalSetup from "./panels/targetDonateAdditionalSetup";
import TargetDonatePostingSetup from "./panels/targetDonatePostingSetup";

class App extends React.Component {
	state = {
		activePanel: 'home',
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}
			>
				<Panel id="home">
					<PanelHeader>Тип сбора</PanelHeader>
					<Group>
						<RichCell
							multiline
							before={<Icon28TargetOutline style={{
								color: '#3F8AE0'
							}}/>}
							caption="Когда есть определённая цель"
							after={<Icon28ChevronRightOutline style={{
								color: '#B8C1CC'
							}}/>}
							onClick={() => {this.setState({activePanel: 'targetDonate'})}}
						>
							Целевой сбор
						</RichCell>
						<RichCell
							multiline
							before={<Icon28CalendarOutline style={{
								color: '#3F8AE0'
							}} />}
							caption="Если помощь нужна ежемесячно"
							after={<Icon28ChevronRightOutline style={{
								color: '#B8C1CC'
							}}/>}
							onClick={() => {this.setState({activePanel: 'monthlyDonate'})}}
						>
							Регулярный сбор
						</RichCell>
					</Group>
				</Panel>

				<Panel id="targetDonate">
					<PanelHeader left={<PanelHeaderBack onClick={() => {this.setState({activePanel: 'home'})}} />}>Целевой сбор</PanelHeader>
					<TargetDonate/>
					<Div>
						<Button size="xl" mode="primary" onClick={() => {this.setState({activePanel: 'targetDonateAdditionalSetup'})}}>Далее</Button>
					</Div>
				</Panel>

				<Panel id="targetDonateAdditionalSetup">
					<PanelHeader left={<PanelHeaderBack onClick={() => {this.setState({activePanel: 'targetDonate'})}} />}>Дополнительно</PanelHeader>
					<TargetDonateAdditionalSetup/>

					<Div>
						<Button size="xl" mode="primary" onClick={() => {this.setState({activePanel: 'targetDonatePostingSetup'})}}>Создать сбор</Button>
					</Div>

				</Panel>

				<Panel id="targetDonatePostingSetup">
					<PanelHeader left={<PanelHeaderButton onClick={() => {this.setState({activePanel: 'home'})}}><Icon28CancelOutline/></PanelHeaderButton>}>Konstantin Gvencadze</PanelHeader>
					<TargetDonatePostingSetup/>
				</Panel>


				{/*Регулярный сбор*/}
				<Panel id="monthlyDonate">
					<PanelHeader left={<PanelHeaderBack onClick={() => {this.setState({activePanel: 'home'})}}/>}>Регулярный сбор</PanelHeader>
				</Panel>
			</View>
		);
	}
}

export default App;

