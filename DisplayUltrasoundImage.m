function dbdata = DisplayUltrasoundImage(frame, ImgData)
    %load("probe-orientation-straight.mat");
    unpack = cell2mat(ImgData);
    squeezed = squeeze(unpack);
    img = squeezed(:,:,frame);
    data = img/max(max(img));
    dbdata = db(data);
    % USImageToHandSim(dbdata);
    imagesc(dbdata, [-50,0]);
    colormap(gray(256));
end

