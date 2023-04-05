/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

export function KissyFace(props) {
  const { width, height, ...rest } = props;

  return (
    <svg
      viewBox="0 0 512 512"
      width={width || '40px'}
      height={width || height || '40px'}
      strokeWidth="0"
      fill="var(--face-icon-color)"
      aria-label="'Kissy face' emoji"
      {...rest}
    >
      <g>
        <path d="M375.029,190.243c-8.776-15.756-25.424-25.544-43.445-25.544c-17.503,0-34.187,9.694-43.544,25.301
        c-2.507,4.18-1.15,9.602,3.032,12.109c4.181,2.506,9.601,1.15,12.109-3.032c6.185-10.317,17.068-16.725,28.403-16.725
        c11.622-0.001,22.36,6.314,28.023,16.481c1.615,2.899,4.62,4.533,7.719,4.533c1.452,0,2.927-0.36,4.287-1.117
        C375.873,199.877,377.402,194.502,375.029,190.243z"/>
      </g>
      <g>
        <path d="M219.712,190.242c-8.777-15.756-25.424-25.544-43.446-25.544c-17.503,0-34.187,9.694-43.544,25.301
        c-2.507,4.18-1.15,9.602,3.032,12.109c4.18,2.506,9.601,1.15,12.109-3.032c6.185-10.317,17.068-16.725,28.403-16.725
        c11.623,0,22.361,6.315,28.024,16.481c1.615,2.899,4.62,4.533,7.719,4.533c1.452,0,2.927-0.36,4.287-1.117
        C220.556,199.876,222.084,194.501,219.712,190.242z"/>
      </g>
      <g>
        <path d="M328.461,334.362c3.414-2.086,7.098-3.963,10.314-6.34c6.315-4.679,0.206-0.153,0.001-0.001
        c10.18-7.544,13.44-22.31,7.485-33.474c-5.576-10.453-16.943-14.703-28.235-12.9c-13.558,2.165-27.185,4.819-40.619,7.649
        c-2.51,0.528-4.835,0.864-6.811,2.816c-4.377,4.325-2.92,11.958,2.713,14.386c4.586,1.977,11.849-0.699,16.433-1.562
        c8.251-1.553,16.503-3.108,24.755-4.662c5.602-1.055,13.964-3.77,16.645,3.538c2.826,7.702-4.915,11.228-10.131,14.412
        c-5.311,3.244-11.276,6.133-16.226,9.908c-4.976,3.797-5.83,10.946-0.353,14.839c2.218,1.577,5.217,2.44,7.674,3.512
        c5.66,2.47,18.536,5.583,19.333,12.672c1.018,9.048-7.265,8.796-13.218,8.381c-8.33-0.581-16.66-1.163-24.991-1.744
        c-4.677-0.326-11.518-2.018-16.153-0.427c-5.803,1.991-7.847,9.486-3.8,14.139c2.072,2.383,4.803,2.849,7.716,3.131
        c14.263,1.376,29.226,3.138,43.552,3.04c12.267-0.084,22.765-10.12,24.407-22.08c0.916-6.668-0.857-13.559-4.886-18.95
        C339.887,339.055,334.454,337.227,328.461,334.362z"/>
      </g>
      <g>
        <path d="M493.792,293.371c-11.943-8.211-27.028-9.629-40.015-4.333c-1.888-13.88-10.628-26.237-23.68-32.495
        c-18.73-8.982-41.608-2.754-53.213,14.486c-6.722,9.986-8.885,22.375-5.943,34.011l14.339,64.56
        c1.013,4.565,3.262,8.731,6.419,12.081c-39.293,51.784-100.661,82.462-165.902,82.462c-114.77,0-208.143-93.373-208.143-208.143
        S111.026,47.857,225.796,47.857c47.783,0,94.455,16.594,131.417,46.725c36.453,29.715,62.007,71.23,71.956,116.898
        c1.038,4.762,5.736,7.784,10.504,6.745c4.763-1.038,7.783-5.74,6.745-10.504c-10.796-49.554-38.515-94.595-78.05-126.823
        c-40.104-32.692-90.737-50.696-142.572-50.696C101.291,30.204,0,131.495,0,256.001s101.291,225.796,225.796,225.796
        c71.916,0,139.505-34.351,182.021-92.178c0.869,0.088,1.741,0.146,2.616,0.146c2.594,0,5.196-0.391,7.711-1.182l61.71-19.408
        c12.318-3.025,22.528-11.312,28.045-22.783C516.824,327.831,510.76,305.038,493.792,293.371z M491.991,338.739
        c-3.248,6.753-9.276,11.615-16.538,13.338c-0.206,0.049-0.41,0.105-0.611,0.168l-61.995,19.497
        c-2.193,0.687-4.492,0.435-6.48-0.712c-1.988-1.149-3.358-3.016-3.855-5.257l-14.367-64.692c-0.021-0.094-0.042-0.188-0.067-0.281
        c-1.772-6.902-0.547-13.973,3.451-19.911c4.668-6.934,12.47-10.805,20.44-10.805c3.553,0,7.139,0.768,10.497,2.378
        c9.47,4.54,15.052,14.577,13.89,24.976c-0.521,4.691,1.777,9.247,5.857,11.606c4.079,2.357,9.177,2.078,12.985-0.719
        c8.439-6.202,19.931-6.366,28.595-0.407C493.654,314.699,497.178,327.951,491.991,338.739z"/>
      </g>
      <g>
        <circle cx="441.862" cy="240.038" r="8.827"/>
      </g>
    </svg>
  );
}
