import React from 'react'
import {FormLayout, Radio, Select} from "@vkontakte/vkui";

class TargetDonateAdditionalSetup extends React.Component {
    render() {
        return(
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
            </FormLayout>
        )
    }
}

export default TargetDonateAdditionalSetup