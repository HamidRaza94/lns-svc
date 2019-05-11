import {
  contactRepository,
  IContactData,
  IContactConditions,
  IContactProjection,
  IContactOptions
} from '../../repositories';

class ContactMiddleware {
  public async create(data: any) {
    const { name, email, phone, comment } = data;

    const contactData: IContactData = {
      name,
      email,
      phone,
      comment
    };

    return await contactRepository.create(contactData);
  }

  public async read(data: any) {
    const { name, email, phone, limit, skip } = data;

    const conditions: IContactConditions = {};

    if (name) {
      conditions.name = name;
    }

    if (email) {
      conditions.email = email;
    }

    if (phone) {
      conditions.phone = phone;
    }

    const projection: IContactProjection = {};

    const options: IContactOptions = {
      limit: parseInt(limit),
      skip: parseInt(skip)
    };

    return await contactRepository.find(conditions, projection, options);
  }
}

export default new ContactMiddleware();
