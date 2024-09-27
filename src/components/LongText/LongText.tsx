import { memo } from "react";
import { Typography, TypographyProps } from "@mui/material";
import { LongTextProps } from "./LongText.types";

const LongText = ({ lineClamp, text, maxCharacters, ...props }: LongTextProps & TypographyProps) => {
    return (
        <Typography
            title={text}
            style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: lineClamp,
                WebkitBoxOrient: "vertical",
                maxWidth: maxCharacters ? `${maxCharacters}ch` : "100%",
            }}
            {...props}
        >
            {text}
        </Typography>
    );
};

export default memo(LongText);
