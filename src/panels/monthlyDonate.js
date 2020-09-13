import React from 'react'
import {FormLayout, Input, Select, Textarea} from "@vkontakte/vkui";
import ImageUpload from "./ImageUpload";

class MonthlyDonate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: null
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        console.log("file: " + event.target.files[0]);
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return(
            <FormLayout>
                <ImageUpload/>

                <Input type="text" placeholder="Название сбора" top="Название сбора"/>
                <Input type="text" placeholder="Сколько нужно в месяц?" top="Сумма, ₽"/>
                <Input type="text" placeholder="Например, поддержка приюта" top="Цель"/>
                <Textarea top="Описание" placeholder="На что пойдут деньги и как они кому-то помогут?" />

                <Select top="Куда получать деньги">
                    <option value="vkpay">Счёт VK Pay 1234</option>
                    <option value="mastercard">Счёт MasterCard 1234</option>
                </Select>

                <Select top="Автор">
                    <option value="gvencadze">Konstantin Gvencadze</option>
                    <option value="babazhanov">Руслан Бабажанов</option>
                </Select>
            </FormLayout>
        )
    }
}

export default MonthlyDonate