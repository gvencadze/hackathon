import React from 'react'
import {File, FormLayout, Input, Select, Textarea} from "@vkontakte/vkui";
import {Icon28PictureOutline} from "@vkontakte/icons";

class TargetDonate extends React.Component {
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
                <Input type="text" placeholder="Сколько надо собрать?" top="Сумма, ₽"/>
                <Input type="text" placeholder="Например, лечение барса" top="Цель"/>
                <Textarea top="Описание" placeholder="На что пойдут деньги и как они кому-то помогут?" />

                <Select top="Куда получать деньги">
                    <option value="vkpay">Счёт VK Pay 1234</option>
                    <option value="mastercard">Счёт MasterCard 1234</option>
                </Select>
            </FormLayout>
        )
    }
}

export default TargetDonate