import CMS from 'netlify-cms-app';
// import uploadcare from 'netlify-cms-media-library-uploadcare';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

// import AboutPagePreview from './preview-templates/AboutPagePreview';
// import BlogPostPreview from './preview-templates/BlogPostPreview';
// import ProductPagePreview from './preview-templates/ProductPagePreview';
// import IndexPagePreview from './preview-templates/IndexPagePreview';
import ResourcePreview from './preview-templates/ResourcePreview';
import PressPagePreview from './preview-templates/PressPagePreview';

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

// CMS.registerPreviewTemplate('index', IndexPagePreview);
// CMS.registerPreviewTemplate('about', AboutPagePreview);
// CMS.registerPreviewTemplate('products', ProductPagePreview);
// CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('resources', ResourcePreview);
CMS.registerPreviewTemplate('press', PressPagePreview);
