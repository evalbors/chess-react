import '../css/Square.css'

interface Props {
    image?: string
    number: number
}

export default function Square({ number, image }: Props) {
    if (number % 2 === 0) {
        return (
            <div className="square square__black">
                <img src="{image}" />
            </div>
        );
    } else {
        return (
            <div className="square square__white">
                <img src="{image}" />
            </div>
        );
    }
}

