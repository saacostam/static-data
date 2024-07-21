/**
 * Project
 *
 * @export
 * @interface Project
 * @typedef {Project}
 */
export interface Project {
    /**
     * Identifier
     *
     * @type {string}
     */
    id: string;


    /**
     * Name of the project
     *
     * @type {string}
     */
    name: string;

    /**
     * A rating (from 0 to 10) given by me that represents how complex and useful a project is.
     * Ultimately, it prioritizes projects the project that I want to share the most.
     * 
     */
    rating: number;

    /**
     * A small-size image (300x150) for a project.
     *
     * @type {?string}
     */
    smImage?: string;

    /**
     * A medium-size image (1200x600) for a project.
     *
     * @type {?string}
     */
    mdImage?: string;
}
