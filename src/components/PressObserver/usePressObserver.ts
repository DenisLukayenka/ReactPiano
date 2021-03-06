import { useEffect, useState } from "react";

type IsPressed = boolean;
type EventCode = string;

interface Settings {
    watchKey: EventCode;
    onStartPress: Function;
    onFinishPress: Function;
}

export function usePressObserver({
    watchKey,
    onStartPress,
    onFinishPress
}: Settings): IsPressed {
    const [pressed, setPressed] = useState<IsPressed>(false);

    useEffect(() => {
        function handlePressStart({ code }: KeyboardEvent): void {
            if (pressed || watchKey !== code) {
                return;
            }

            setPressed(true);
            onStartPress();
        }

        function handlePressFinish({ code }: KeyboardEvent): void {
            if (!pressed || watchKey !== code) {
                return;
            }

            setPressed(false);
            onFinishPress();
        }

        document.addEventListener('keydown', handlePressStart);
        document.addEventListener('keyup', handlePressFinish);

        return () => {
            document.removeEventListener('keydown', handlePressStart);
            document.removeEventListener('keyup', handlePressFinish);
        };

    }, [watchKey, pressed, setPressed, onStartPress, onFinishPress]);

    return pressed;
}