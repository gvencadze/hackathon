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
	Select,
	FormLayout,
	Input,
	Textarea,
	Button,
	File,
	Radio,
	Card,
	CardGrid,
	PanelHeaderButton
} from "@vkontakte/vkui";

//@vkontakte icons
import {Icon28CalendarOutline, Icon28TargetOutline, Icon28ChevronRightOutline, Icon28PictureOutline, Icon28CancelOutline} from '@vkontakte/icons';

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
							before={<Icon28TargetOutline/>}
							caption="Вчера в 20:30"
							after={<Icon28ChevronRightOutline/>}
							onClick={() => {this.setState({activePanel: 'targetDonate'})}}
						>
							Целевой сбор
						</RichCell>
						<RichCell
							multiline
							before={<Icon28CalendarOutline/>}
							caption="Вчера в 20:30"
							after={<Icon28ChevronRightOutline/>}
							onClick={() => {this.setState({activePanel: 'monthlyDonate'})}}
						>
							Регулярный сбор
						</RichCell>
					</Group>
				</Panel>

				<Panel id="targetDonate">
					<PanelHeader left={<PanelHeaderBack onClick={() => {this.setState({activePanel: 'home'})}} />}>Целевой сбор</PanelHeader>

					<FormLayout>
							<File before={<Icon28PictureOutline />} controlSize="xl" mode="outline">
								Загрузить обложку
							</File>

							<Input type="text" placeholder="Название сбора" top="Название сбора"/>
							<Input type="text" placeholder="Сколько надо собрать?" top="Сумма, ₽"/>
							<Input type="text" placeholder="Например, лечение барса" top="Цель"/>
							<Textarea top="Описание" placeholder="На что пойдут деньги и как они кому-то помогут?" />

							<Select top="Куда получать деньги">
								<option value="vkpay">Счёт VK Pay 1234</option>
								<option value="mastercard">Счёт MasterCard 1234</option>
							</Select>

							<Button size="xl" mode="primary" onClick={() => {this.setState({activePanel: 'targetDonateAdditionalSetup'})}}>Далее</Button>
					</FormLayout>
				</Panel>

				<Panel id="targetDonateAdditionalSetup">
					<PanelHeader left={<PanelHeaderBack onClick={() => {this.setState({activePanel: 'targetDonate'})}} />}>Дополнительно</PanelHeader>

					<FormLayout>
						<Select top="Автор">
							<option value="gvencadze">Konstantin Gvencadze</option>
							<option value="babazhanov">Руслан Бабажанов</option>
						</Select>

						<Radio name="radio" value="1">Когда соберём сумму</Radio>
						<Radio name="radio" value="2" defaultChecked>В определённую дату</Radio>

						<Select
							top="Дата окончания"
							placeholder="Выберите дату"
						>
							<option>14 сентября</option>
							<option>15 сентября</option>
							<option>16 сентября</option>
							<option>17 сентября</option>
							<option>18 сентября</option>
							<option>19 сентября</option>
							<option>20 сентября</option>
						</Select>

						<Button size="xl" mode="primary" onClick={() => {this.setState({activePanel: 'targetDonatePostingSetup'})}}>Создать сбор</Button>
					</FormLayout>
				</Panel>

				<Panel id="targetDonatePostingSetup">
					<PanelHeader left={<PanelHeaderButton onClick={() => {this.setState({activePanel: 'home'})}}><Icon28CancelOutline/></PanelHeaderButton>}>Konstantin Gvencadze</PanelHeader>

					<CardGrid>
						<Card size="l">
							<div style={{ height: 96, backgroundImage: "url(https://images.unsplash.com/photo-1546977532-fb9cc20cac79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }} />



							<Button size="m" mode="primary" disabled>Помочь</Button>
						</Card>
					</CardGrid>
				</Panel>

				<Panel id="monthlyDonate">
					<PanelHeader left={<PanelHeaderBack onClick={() => {this.setState({activePanel: 'home'})}} />}>Регулярный сбор</PanelHeader>
				</Panel>
			</View>
		);
	}
}

export default App;

