import { NextFunction, Request, Response } from "express";
import {
  generateKey,
  generateUuid,
  convertToApiKey,
  validateKey,
  validateUuid,
} from "../middleware/keyServices";
import { _userRegister, _userLogin, _getUsers , _confirmEmail} from "../services/auth.service";
import { hashItem, validateHash } from "../middleware/hash";
import { generateJwtToken } from "../middleware/auth";
import SendMail from "../middleware/mailer";
import CustomError from "../middleware/customError";

/**
 *
 * @param req
 * @param res
 */
export async function userRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { auth, user, payload } = req.body;

  console.log("this is from register");

  if (!auth || !user) next(new CustomError("auth or user data not provided"));

  if (!auth.appName || !auth.apiKey)
    next(new CustomError("auth details not complete"));

  if (!user.email || !user.password)
    throw new CustomError("user data not complete");

  const isApiKeyValid = await validateKey(auth.apiKey);

  if (!isApiKeyValid) {
    next(new CustomError("api key is not valid"));
  }

  const hashedPassword = await hashItem(user.password);

  const uuid = await generateUuid();

  const data = await _userRegister(
    user.email,
    hashedPassword,
    auth.apiKey,
    uuid,
    auth.appName,
    payload || null,
    next
  ).catch((err) => {
    next(err);
  });

  if (!data) new CustomError("An error occurred");

  if (data) {
    try {
      const body = `
            <img style="width:50%;display:block;margin:auto" src="https://i.ibb.co/g4ZFJ0G/cover.png">
            <h2 style="text-align:center">verify your email address</h2>
            <p style="padding-bottom:1rem;">Please confirm that you want to use this as your ${data.appName} account email address.</p>
            <a style="display:block;margin:auto;text-align:center;" href="http:localhost:8080/v1/users/confirm/${data.uuid}"><button style="padding:1rem;color:#fff;background:#553d83;margin:auto;text-align:center;width:100%;border:none;outline:none;">Confirm Email Address</button></a>

            <p style="padding:7px">Or paste the below link to your browser</p>
            <p>http:localhost:8080/v1/users/confirm/${data.uuid}</p>
            `;
      SendMail(
        data.email,
        "Confirm Email Addresss",
        body || "this is to test out our application click https://gmail.com"
      );
    } catch (err) {
      next(err);
    }

    // const jwt = await generateJwtToken(data.uuid).catch(err => next(err));
    res
      .status(200)
      .send({
        success: true,
        message: "Registration successful",
        data: data || null,
      });
  }
}

/**
 *
 * @param req
 * @param res
 */
export async function userLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { auth, user } = req.body;

  if (!auth || !user) next(new CustomError("auth or user data not provided"));

  if (!auth.appName || !auth.apiKey)
    next(new CustomError("auth details not complete"));

  if (!user.email || !user.password)
    throw new CustomError("user data not complete");

  const isApiKeyValid = await validateKey(auth.apiKey);

  if (!isApiKeyValid) {
    next(new CustomError("api key is not valid"));
  }

  const data = await _userLogin(user.email, user.password, next).catch(
    (err) => {
      next(err);
    }
  );

  if (!data) throw new CustomError("An error occured");

  if (data) {
    const jwt = await generateJwtToken(data.uuid, next).catch((err) =>
      next(err)
    );

    res
      .status(200)
      .send({
        success: true,
        message: "User Login successful",
        token: jwt,
        data: data || null,
      });
  }
}

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const apiKey = req.params.id;

  const isApiKeyValid = await validateKey(apiKey);

  if (!isApiKeyValid) {
    next(new CustomError("api key is not valid"));
  }

  const users = await _getUsers(apiKey).catch((err) => next(err));

  // if(!users) new CustomError("An error occured while trying to get users")

  if (users) {
    // const jwt = await generateJwtToken(data.uuid).catch(err => next(err));
    res
      .status(200)
      .send({
        success: true,
        message: "users data return successful",
        data: users || null,
      });
  }
}

export async function getApiKey(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const uuid = req.params.id;

  const isUuidValid = await validateUuid(uuid);

  if (!isUuidValid) {
    next(new CustomError("uuid is not valid"));
  }
  if (isUuidValid) {
    const apiKey = await convertToApiKey(uuid);

    if (!apiKey) next(new CustomError("api key could not be generated"));

    if (apiKey) res.status(200).send({ uuid, apiKey });
  }
}

export async function confirmEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const uuid = req.params.id;

   if(!uuid) next(new CustomError("uuid is not provided"))

   const isUuidValid = await validateUuid(uuid);

   if (!isUuidValid) {
        next(new CustomError("uuid is not valid"));
   }
   try {
       //await _confirmEmail(uuid:string)

   } catch (error) {
       next(error)
   }
}
