import React from "react";
import {isNull} from "lodash";
import UploadImage from "../../../../shared/ui/UploadImage/UploadImage";
import {useImageStore} from "../../model/slice/imageStore";

const UploadImageForm = () => {
	const [image, uploadImage] = useImageStore(store => [store.image, store.uploadImage]);
	const onUploadImageHandler = (value: any) => {
		if (!isNull(value)) {
			uploadImage(value);

		}

	};
	return (
		<UploadImage imageLink={image} onUploadImage={onUploadImageHandler}/>
	);
};

export default UploadImageForm;