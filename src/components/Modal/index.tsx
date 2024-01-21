import { 
    Modal as MuiModal, 
    ModalProps as MuiModalProps, 
    Paper 
} from "@mui/material";

const style = {
    "bgcolor": 'background.paper',
    "border": '2px solid #000',
    "boxShadow": 24,
    "left": '50%',
    "p": 4,
    "position": 'absolute' as 'absolute',
    "top": '50%',
    "transform": 'translate(-50%, -50%)',
    "width": 400,
};


interface ModalProps {
    children: MuiModalProps["children"];
    open: boolean;
    onClose: () => void;
    paperStyle?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
    children,
    onClose,
    open,
    paperStyle,
}) => {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
        >
            <Paper sx={{
                ...style, 
                ...paperStyle,
            }}>
                {children}
            </Paper>
        </MuiModal>
    );
};

export default Modal;
