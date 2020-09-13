import React from 'react'
import {File, FormLayout, Input, Select, Textarea} from "@vkontakte/vkui";
import {Icon28PictureOutline} from "@vkontakte/icons";

class MonthlyDonate extends React.Component {
    render() {
        return(
            <FormLayout>
                <File style={{
                    height: '120px'
                }} before={<Icon28PictureOutline />} controlSize="xl" mode="outline">
                    <p style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>Выбрать фото</p>
                </File>

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