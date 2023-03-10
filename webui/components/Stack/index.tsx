import styled from "@emotion/styled"


interface StackProps {
    children: JSX.Element | JSX.Element[] | string | undefined;
    direction?: 'row' | 'column' | 'row-reserve' | 'column-reserve';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    mt?: number | string;
    mb?: number | string;
    mr?: number | string;
    ml?: number | string;
    spacing?: number | string;
    h?: number | string;
    w?: number | string;
}

const StackRoot = styled.div((props: StackProps) => ({
    display: 'flex',
    ...(props.justifyContent && {
        justifyContent: props.justifyContent
    }),
    ...(props.alignItems && {
        alignItems: props.alignItems
    }),
    ...(props.mt && { marginTop: props.mt }),
    ...(props.mb && { marginBottom: props.mb }),
    ...(props.mr && { marginRight: props.mr }),
    ...(props.ml && { marginLeft: props.ml }),
    ...(props.spacing && props.direction !== 'column' && { columnGap: props.spacing }),
    ...(props.spacing && props.direction === 'column' && { rowGap: props.spacing }),
    flexDirection: props.direction as any,
    ...(props.h && { height: props.h }),
    ...(props.w && { width: props.w })
}))

export default function Stack({ children, ...rest }: StackProps) {
    return <StackRoot {...rest}>{children}</StackRoot>
}