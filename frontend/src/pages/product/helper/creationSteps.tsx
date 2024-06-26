import { Category } from "../../../constants/types/Product";
import PricesField from "../../components/products/AddProductPrice";
import ProductSummary from "../../components/products/ProductCreationSummary";
import DescriptionField from "../../components/resuable/form_input/DescriptionField";
import FormInput from "../../components/resuable/form_input/InputFeedback";
import SelectEnum from "../../components/resuable/form_input/SelectEnum";

// eslint-disable-next-line @typescript-eslint/ban-types
export const getProductCreationSteps = () => [
    {
        title: "Select a title for your product",
        content: <FormInput id="title" type="text" placeholder="" />,
        inputField: ["title"],
    },
    {
        title: "Select Categories",
        content: <SelectEnum placeholder="Select a category" id="categories" options={Category} />,
        inputField: ["category"],
    },
    {
        title: "Select Description",
        content: <DescriptionField id="description" />,
        inputField: ["description"],
    },
    {
        title: "Select Price",
        content: <PricesField />,
        inputField: ["price", "rentPrice", "rentDuration"],
    },
    {
        title: "Summary",
        content: <ProductSummary />,
        inputField: [],
    },
];
