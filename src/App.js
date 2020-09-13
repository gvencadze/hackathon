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
	Div, Avatar, Text, CardGrid, Card, InfoRow, Progress
} from "@vkontakte/vkui";

//@vkontakte icons
import {Icon28CalendarOutline, Icon28TargetOutline, Icon28ChevronRightOutline, Icon28CancelOutline} from '@vkontakte/icons';
import TargetDonate from "./panels/targetDonate";
import TargetDonateAdditionalSetup from "./panels/targetDonateAdditionalSetup";
import TargetDonatePostingSetup from "./panels/targetDonatePostingSetup";
import Icon16MoreHorizontal from "@vkontakte/icons/dist/16/more_horizontal";
import TargetDonateDetailView from "./panels/targetDonateDetailView";
import TargetNewsFeedSnippetHeader from "./panels/targetNewsFeedSnippetHeader";

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

					<Div>
						<Div>
							<Button size="xl" mode="primary" onClick={() => {this.setState({activePanel: 'targetNewsFeedSnippet'})}}>Поделиться</Button>
						</Div>
					</Div>
					{/*Вложенность ради красивого отступа 🦊*/}

				</Panel>

				<Panel id="targetNewsFeedSnippet">
					<TargetNewsFeedSnippetHeader/>

					<Div>
						<RichCell
							disabled
							multiline
							before={<Avatar size={44} src="https://sun9-48.userapi.com/c852236/v852236758/1c06e6/1TslavjeEL0.jpg" />}
							caption="час назад"
							after={<Icon16MoreHorizontal/>}
						>
							Konstantin Gvencadze
						</RichCell>

						<Div>
							<Text>Сейчас самое время помочь тем, кто не может попросить о помощи сам.</Text>
						</Div>

						<CardGrid>
							<Card size="l">
								<div style={{ height: 96, background: "url(https://images.unsplash.com/photo-1546977532-fb9cc20cac79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center center',
									borderTopLeftRadius: 10,
									borderTopRightRadius: 10
								}}/>

								<Div>
									<Text>Добряши помогают барсикам</Text>

									<Text style={{
										color: '#818C99',
										fontSize: '10pt'
									}}>
										Konstantin Gvencadze · Закончится через 6 дней
									</Text>
								</Div>

								<Div style={{
									display: 'flex',
									justifyContent: 'space-between'
								}}>
									<InfoRow header="Собрано 8 750 ₽ из 10 000 ₽">
										<Progress value={87}/>
									</InfoRow>
									<Button size="m" mode="primary" onClick={() => {this.setState({activePanel: 'targetDonateDetailView'})}}>Помочь</Button>
								</Div>
							</Card>
						</CardGrid>
					</Div>
				</Panel>

				<Panel id="targetDonateDetailView">
					<PanelHeader
						left={<PanelHeaderButton><Icon28CancelOutline onClick={() => {this.setState({activePanel: 'home'})}} /></PanelHeaderButton>}
						separator={false}
					>О пожертвовании</PanelHeader>

					<TargetDonateDetailView/>
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

